"use client";
import React from 'react';
import { BlockRenderer } from './BlockRenderer';
import {useTheme} from '@/contexts/ThemeContext';

interface Props {
    section: string;
    className?: string;
    params?: Record<string, string>;
    data?: Record<string, any>;
}

export const LayoutSectionRenderer: React.FC<Props> = ({ section, className = '', params, data }) => {

    const {theme} = useTheme();

    if (!theme) {
        return null; // or a loading skeleton
    }
    const block = theme?.layout[section];

    return (
        <div className={className}>
                <BlockRenderer
                    key={block[0].id || 1}
                    block={block[0]}
                    index={1}
                    params={params}
                    data={data}
                />
        </div>
    );
};
