"use client";
import React, {Suspense} from 'react';
import {useTheme} from '@/contexts/ThemeContext';
import {DynamicRenderer} from './DynamicRenderer';
import {PageKey} from '@/types/theme';

interface PageRendererProps {
    page: PageKey;
    className?: string;
    params?: Record<string, string>;
}

export function PageRenderer({page, className = "", params}: PageRendererProps) {
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
                <DynamicRenderer blocks={pageBlocks} params={params}/>

                {/* Render footer if defined */}
                {theme?.layout.footer && (
                    <DynamicRenderer blocks={theme?.layout.footer}/>
                )}
            </Suspense>
        </main>
    );
}
