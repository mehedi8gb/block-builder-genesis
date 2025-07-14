"use client";
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { DynamicRenderer } from './DynamicRenderer';
import { PageKey } from '@/types/theme';

interface PageRendererProps {
  page: PageKey;
  className?: string;
}

export function PageRenderer({ page, className = "" }: PageRendererProps) {
  const { theme } = useTheme();

  const pageBlocks = theme?.layout[page] || [];

  return (
    <main className={className}>
      {/* Render header if defined */}
      {theme?.layout.header && (
        <DynamicRenderer blocks={theme?.layout.header} />
      )}
      
      {/* Render page content */}
      <DynamicRenderer blocks={pageBlocks} />
      
      {/* Render footer if defined */}
      {theme?.layout.footer && (
        <DynamicRenderer blocks={theme?.layout.footer} />
      )}
    </main>
  );
}
