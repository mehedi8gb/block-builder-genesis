
import { z } from 'zod';
import React from "react";
import {
  CardItemVariants,
  GridContainerVariants,
  SectionWrapperVariants,
  TextBlockHeadingVariants
} from "@/core/variants/designVariants";

// Block schema - represents a component with its props
export const BlockSchema = z.object({
  block: z.string(),
  props: z.record(z.any()).optional().default({}),
  id: z.string().optional(),
  className: z.string().optional(),
});

// Layout schema - defines page structures
export const LayoutSchema = z.object({
  home: z.array(BlockSchema).optional().default([]),
  pages: z.record(z.array(BlockSchema)).optional().default({}),
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
  _id: z.string(),
  name: z.string(),
  active: z.boolean(),
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


export interface Product {
  id: number | string;
  name: string;
  price: string;
  slug: string;
  image?: string;
  specs?: { label: string; value: string }[]

}

export interface ProductCardProps {
  products: Product[];
  child: {
    block: string;
    className?: string;
    wrapperClass?: string;
    imageClass?: string;
    titleClass?: string;
    priceClass?: string;
  }
}

export interface CategoryGridProps {
  props: {
    layout?: GridContainerVariants['layout'];
    animate?: CardItemVariants['animate'];
    rounded?: CardItemVariants['rounded'];
    shadow?: CardItemVariants['shadow'];
    align?: SectionWrapperVariants['align'];
    justify?: GridContainerVariants['justify'];
    spacing?: GridContainerVariants['spacing'];
    bgColor?: SectionWrapperVariants['bgColor']
    gap?: string;
    title?: string;
    cardVariant?: string;
    categories?: string[];
    columns?: GridContainerVariants['columns'];
    className?: string;
    variant?: string;
    headingSize?: TextBlockHeadingVariants['size'];
    headingColor?: TextBlockHeadingVariants['color'];
    headingSpacing?: TextBlockHeadingVariants['spacing'];
  }
}


export interface ProductListBlockProps {
  props: {
    title?: string;
    products?: Product[];
    columns?: number;
    className?: string;
    child?: {
      block: string;
      className?: string;
      wrapperClass?: string;
      imageClass?: string;
      titleClass?: string;
      priceClass?: string;
    }
  }
}

export interface ProductCardBlockProps {
  products: Product[];
  child: {
    block: string;
    className?: string;
    wrapperClass?: string;
    imageClass?: string;
    titleClass?: string;
    priceClass?: string;
  }
}


export interface Category {
  id: number | string;
  name: string;
  slug: string;
  image?: string;
}



export interface HeaderProps {
  props: {
    logo?: string;
    title?: string;
    nav?: { title: string; url: string }[];
    children?: React.ReactNode;
    className?: string;
  }
}