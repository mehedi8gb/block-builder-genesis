"use client";
import React, {Suspense} from 'react';
import {useTheme} from '@/contexts/ThemeContext';
import {DynamicRenderer} from './DynamicRenderer';
import {PageKey} from '@/types/theme';

interface PageRendererProps {
    page: PageKey;
    className?: string;
    params?: Record<string, string>;
    // Optional Zustand-powered data injected manually
    data?: {
        [key: string]: any;   // for future extensibility (like user, cart, etc.)
    };
}

export function PageRenderer({page, className = "", params, data}: PageRendererProps) {
    const {theme} = useTheme();
    const pageBlocks = theme?.layout[page] || [];

    return (
        <main className={className}>
            <Suspense fallback={<div>Loading...</div>}>
                {/* Render header if defined */}
                {theme?.layout.header && (
                    <DynamicRenderer blocks={theme?.layout.header}/>
                )}

                {/* Render page content */}
                <DynamicRenderer blocks={pageBlocks} params={params} data={data}/>

                {/* Render footer if defined */}
                {theme?.layout.footer && (
                    <DynamicRenderer blocks={theme?.layout.footer}/>
                )}
            </Suspense>
        </main>
    );
}
