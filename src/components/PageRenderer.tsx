
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { DynamicRenderer } from './DynamicRenderer';
import { PageKey } from '@/types/theme';

interface PageRendererProps {
  page: PageKey;
  className?: string;
}

export function PageRenderer({ page, className = "" }: PageRendererProps) {
  const { theme, loading, error } = useTheme();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading theme...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-center">
          <h2 className="text-xl font-bold mb-2">Theme Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!theme) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">No theme loaded</div>
      </div>
    );
  }

  const pageBlocks = theme.layout[page] || [];

  return (
    <main className={className}>
      {/* Render header if defined */}
      {theme.layout.header && (
        <DynamicRenderer blocks={theme.layout.header} />
      )}
      
      {/* Render page content */}
      <DynamicRenderer blocks={pageBlocks} />
      
      {/* Render footer if defined */}
      {theme.layout.footer && (
        <DynamicRenderer blocks={theme.layout.footer} />
      )}
    </main>
  );
}
