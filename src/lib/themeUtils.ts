
import { Theme } from '@/types/theme';

// Utility functions for theme management

export function validateThemeStructure(theme: any): boolean {
  try {
    // Basic structure validation
    return !!(
      theme &&
      typeof theme === 'object' &&
      theme.layout &&
      typeof theme.layout === 'object'
    );
  } catch {
    return false;
  }
}

export function getThemeColors(theme: Theme | null): Record<string, string> {
  if (!theme?.global?.colors) return {};
  
  return Object.entries(theme.global.colors)
    .filter(([_, value]) => value)
    .reduce((acc, [key, value]) => {
      acc[key] = value!;
      return acc;
    }, {} as Record<string, string>);
}

export function getThemeFonts(theme: Theme | null): Record<string, string> {
  if (!theme?.global?.fonts) return {};
  
  return Object.entries(theme.global.fonts)
    .filter(([_, value]) => value)
    .reduce((acc, [key, value]) => {
      acc[key] = value!;
      return acc;
    }, {} as Record<string, string>);
}

// Future: Remote theme loading utilities
export async function fetchRemoteTheme(themeId: string): Promise<Theme> {
  // This would connect to your backend API
  const response = await fetch(`/api/themes/${themeId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch theme: ${response.statusText}`);
  }
  return response.json();
}

// Future: Theme versioning utilities
export function compareThemeVersions(version1: string, version2: string): number {
  const v1Parts = version1.split('.').map(Number);
  const v2Parts = version2.split('.').map(Number);
  
  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = v1Parts[i] || 0;
    const v2Part = v2Parts[i] || 0;
    
    if (v1Part < v2Part) return -1;
    if (v1Part > v2Part) return 1;
  }
  
  return 0;
}

// Theme selection strategies for multi-tenancy
export type ThemeSelectionStrategy = 
  | { type: 'default'; theme: string }
  | { type: 'tenant'; tenantId: string }
  | { type: 'query'; paramName: string }
  | { type: 'subdomain'; mapping: Record<string, string> };

export function getThemeFromStrategy(strategy: ThemeSelectionStrategy): string {
  switch (strategy.type) {
    case 'default':
      return strategy.theme;
    
    case 'query':
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        return params.get(strategy.paramName) || 'default';
      }
      return 'default';
    
    case 'subdomain':
      if (typeof window !== 'undefined') {
        const subdomain = window.location.hostname.split('.')[0];
        return strategy.mapping[subdomain] || 'default';
      }
      return 'default';
    
    case 'tenant':
      // This would integrate with your auth/tenant system
      return 'default'; // Placeholder
    
    default:
      return 'default';
  }
}
