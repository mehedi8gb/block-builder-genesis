
import { Hero } from '@/components/blocks/Hero';
import { CategoryGrid } from '@/components/blocks/CategoryGrid';
import { FooterLinks } from '@/components/blocks/FooterLinks';
import { TextBlock } from '@/components/blocks/TextBlock';

// Centralized registry of all available blocks
export const BlockRegistry = {
  Hero,
  CategoryGrid,
  FooterLinks,
  TextBlock,
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
