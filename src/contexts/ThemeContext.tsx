"use client";
import React, {createContext, useContext, useEffect, useState} from "react";
import {Theme, ThemeSchema} from "@/core/types/theme";

interface ThemeContextValue {
    theme: Theme | null;
    error: string | null;
    loadTheme: (themeName: string) => Promise<void>;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme: Theme;
}

export function ThemeProvider({children, defaultTheme}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme | null>(null);
    const [error, setError] = useState<string | null>(null);

    const applyGlobalTokens = (theme: Theme) => {
        const root = document.documentElement;

        // Apply color tokens
        if (theme.global?.colors) {
            Object.entries(theme.global.colors).forEach(([key, value]) => {
                if (value) {
                    root.style.setProperty(`--theme-color-${key}`, value);
                }
            });
        }

        // Apply font tokens
        if (theme.global?.fonts) {
            Object.entries(theme.global.fonts).forEach(([key, value]) => {
                if (value) {
                    root.style.setProperty(`--theme-font-${key}`, value);
                }
            });
        }

        // Apply spacing tokens
        if (theme.global?.spacing) {
            Object.entries(theme.global.spacing).forEach(([key, value]) => {
                if (value) {
                    root.style.setProperty(`--theme-spacing-${key}`, value);
                }
            });
        }
    };

    const loadTheme = async (themeName: string, env?: string) => {
        try {
            setError(null);
            let themeData: unknown;

            if (env === 'development') {
                // ✅ Load via server-side API route
                // const response = await fetch(`/api/themes/${themeName}?t=${Date.now()}`);
                // if (!response.ok) {
                //     throw new Error(`Failed to load theme: ${response.statusText}`);
                // }

                // themeData = await response.json();
                themeData = await import('@/core/utils/themeUtils').then(mod => mod.loadThemeFile(themeName));
            } else {
                themeData = defaultTheme;
            }

            // ✅ Validate using Zod schema
            const validatedTheme = ThemeSchema.parse(themeData);

            setThemeState(validatedTheme);
            applyGlobalTokens(validatedTheme);

            console.log(`Theme "${themeName}" loaded successfully`);

        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : "Unknown error loading theme";
            setError(errorMessage);
            console.error("Theme loading error:", err);
        }
    };

    const setTheme = (newTheme: Theme) => {
        try {
            const validatedTheme = ThemeSchema.parse(newTheme);
            setThemeState(validatedTheme);
            applyGlobalTokens(validatedTheme);
            setError(null);
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : "Invalid theme structure";
            setError(errorMessage);
            console.error("Theme validation error:", err);
        }
    };

    useEffect(() => {
        console.time("⏱ Theme load time");

        // Server-side only
        if (process.env.NEXT_PUBLIC_ENV === 'development') {
            require('@/core/registry'); // Uncompiled dev registration
            console.log('Block registration complete', process.env.NEXT_PUBLIC_ENV);
        } else {
            require('@/core/registry/block-registration'); // Auto-generated
            console.log('Block registration complete', process.env.NEXT_PUBLIC_ENV);
        }

        if (defaultTheme?.name) {
            loadTheme(process.env.NEXT_PUBLIC_LOCAL_THEME_NAME || defaultTheme?.name, process.env.NEXT_PUBLIC_ENV || 'development');
        }
        console.timeEnd("⏱ Theme load time");
    }, [defaultTheme]);

    const value: ThemeContextValue = {
        theme,
        error,
        loadTheme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
