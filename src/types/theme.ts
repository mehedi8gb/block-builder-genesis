
import { z } from 'zod';

// Block schema - represents a component with its props
export const BlockSchema = z.object({
  block: z.string(),
  child: z.record(z.any()).optional().default({}),
  props: z.record(z.any()).optional().default({}),
  id: z.string().optional(),
  className: z.string().optional(),
});

// Layout schema - defines page structures
export const LayoutSchema = z.object({
  home: z.array(BlockSchema).optional().default([]),
  about: z.array(BlockSchema).optional().default([]),
  contact: z.array(BlockSchema).optional().default([]),
  privacy: z.array(BlockSchema).optional().default([]),
  product: z.array(BlockSchema).optional().default([]),
  footer: z.array(BlockSchema).optional().default([]),
  header: z.array(BlockSchema).optional().default([]),
});

// Global design tokens
export const GlobalSchema = z.object({
  colors: z.object({
    primary: z.string().optional(),
    secondary: z.string().optional(),
    background: z.string().optional(),
    text: z.string().optional(),
    accent: z.string().optional(),
  }).optional().default({}),
  fonts: z.object({
    base: z.string().optional(),
    heading: z.string().optional(),
    mono: z.string().optional(),
  }).optional().default({}),
  spacing: z.object({
    xs: z.string().optional(),
    sm: z.string().optional(),
    md: z.string().optional(),
    lg: z.string().optional(),
    xl: z.string().optional(),
  }).optional().default({}),
});

// Complete theme schema
export const ThemeSchema = z.object({
  name: z.string(),
  version: z.string().optional().default("1.0.0"),
  layout: LayoutSchema,
  global: GlobalSchema,
  metadata: z.object({
    description: z.string().optional(),
    author: z.string().optional(),
    created: z.string().optional(),
  }).optional(),
});

// TypeScript types
export type Block = z.infer<typeof BlockSchema>;
export type Layout = z.infer<typeof LayoutSchema>;
export type GlobalTokens = z.infer<typeof GlobalSchema>;
export type Theme = z.infer<typeof ThemeSchema>;
export type PageKey = keyof Layout;
