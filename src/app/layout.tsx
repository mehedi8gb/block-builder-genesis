import type {Metadata} from 'next'
import '../index.css'
import React, {Suspense} from "react";
import {LayoutSectionRenderer} from "@/core/renderers/LayoutSectionRenderer";
import {ThemeProvider} from "@/contexts/ThemeContext";
import {Theme} from "@/core/types/theme";
import {getActiveTheme} from "@/core/lib/themeService";

export const metadata: Metadata = {
    title: 'Dynamic Theme Platform',
    description: 'A Next.js platform with dynamic theming capabilities',
}

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    const theme: Theme = await getActiveTheme();
    return (
        <html lang="en">
        <body>
        <Suspense fallback="Loading theme...">
            <ThemeProvider defaultTheme={theme}>
                <LayoutSectionRenderer section={'header'}/>
                {children}
                <LayoutSectionRenderer section={'footer'}/>
            </ThemeProvider>
        </Suspense>
        </body>
        </html>
    )
}