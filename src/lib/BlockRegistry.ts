
import { Hero } from '@/components/blocks/Hero';
import { CategoryGrid } from '@/components/blocks/CategoryGrid';
import { FooterLinks } from '@/components/blocks/FooterLinks';
import { TextBlock } from '@/components/blocks/TextBlock';
import { ProductList } from "@/components/blocks/ProductList";
import {ProductCard} from "@/components/blocks/ProductCard";

// Centralized registry of all available blocks
export const BlockRegistry = {
  Hero,
  CategoryGrid,
  FooterLinks,
  TextBlock,
  ProductList,
  ProductCard,
} as const;

// Type for available block names
export type BlockName = keyof typeof BlockRegistry;

// Security: Only allow registered components
export function getBlockComponent(blockName: string) {
  if (!(blockName in BlockRegistry)) {
    console.warn(`Block "${blockName}" not found in registry. Available blocks:`, Object.keys(BlockRegistry));
    return null;
  }
  return BlockRegistry[blockName as BlockName];
}

// Get list of available blocks for admin interfaces
export function getAvailableBlocks(): BlockName[] {
  return Object.keys(BlockRegistry) as BlockName[];
}
