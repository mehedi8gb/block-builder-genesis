// core/variants/designTypes.ts.ts

export type DesignSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type DesignShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'glow';
export type DesignRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type DesignAlign = 'left' | 'center' | 'right';
export type DesignAnimate = 'none' | 'fade' | 'zoom' | 'slide-up' | 'slide-down';
export type DesignJustify = 'start' | 'center' | 'end' | 'between' | 'around';
export type DesignGap = 'gap-0' | 'gap-1' | 'gap-2' | 'gap-4' | 'gap-6' | 'gap-8';
export type DesignFontSize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-4xl';
export type DesignFontWeight = 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';

export interface DesignVariantProps {
    columns: { 1: string; 2: string; 3: string; 4: string; 5: string; 6: string };
    spacing: { none: string; xs: string; sm: string; md: string; lg: string; xl: string; "2xl": string };
    justify: { start: string; center: string; end: string; between: string; around: string };
    align: { left: string; center: string; right: string }
}
