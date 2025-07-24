'use client';
import React, {Suspense} from 'react';
import {useTheme} from '@/contexts/ThemeContext';
import {DynamicRenderer} from './DynamicRenderer';
import {PageKey} from '@/core/types/theme';

interface Props {
    page?: PageKey;
    className?: string;
    params?: Record<string, string>;
    data?: Record<string, any>;
    fallback?: React.ReactNode;
}

export const PageRenderer: React.FC<Props> = ({
                                                  page,
                                                  className = '',
                                                  params,
                                                  data,
                                                  fallback = <div>Loading...</div>
                                              }) => {
    const {theme} = useTheme();
    const blocks = theme?.layout[page] ?? [];

    return (
        <main className={className}>
            <Suspense fallback={fallback}>
                <DynamicRenderer blocks={theme?.layout.header}/>
                <DynamicRenderer blocks={blocks} params={params} data={data}/>
                <DynamicRenderer blocks={theme?.layout.footer}/>
            </Suspense>
        </main>
    );
};
