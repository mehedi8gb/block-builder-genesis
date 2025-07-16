"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme, ThemeSchema } from "@/types/theme";

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

export function ThemeProvider({ children, defaultTheme }: ThemeProviderProps) {
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

  const loadTheme = async (themeName: string) => {
    try {
      setError(null);

      // For now, load from local themes directory
      // Later this could be from API: `/api/themes/${themeName}`
      const response = await fetch(`/themes/${themeName}.json`);

      // if (!response.ok) {
      //   throw new Error(`Failed to load theme: ${response.statusText}`);
      // }

      const themeData = await response.json();
      // const themeData = defaultTheme;

      // Validate theme schema
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

    if (defaultTheme?.name) {
      loadTheme(defaultTheme?.name);
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
