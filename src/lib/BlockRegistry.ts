
import { Hero } from '@/components/blocks/Hero';
import { CategoryGrid } from '@/components/blocks/CategoryGrid';
import { FooterLinks } from '@/components/blocks/FooterLinks';
import { TextBlock } from '@/components/blocks/TextBlock';
import { ProductList } from "@/components/blocks/Product/ProductList";
import {ProductCard} from "@/components/blocks/Product/ProductCard";
import { DashboardStats } from '@/components/blocks/DashboardStats';
import { DataTable } from '@/components/blocks/DataTable';
import { DashboardNav } from '@/components/blocks/DashboardNav';
import { Header } from '@/components/blocks/Header';
import {ProductDetails} from "@/components/blocks/Product/ProductDetails";
import {ProductSpecs} from "@/components/blocks/Product/ProductSpecs";
import {RelatedProducts} from "@/components/blocks/Product/RelatedProducts";

// Centralized registry of all available blocks
export const BlockRegistry = {
  Header,
  Hero,
  CategoryGrid,
  FooterLinks,
  TextBlock,
  ProductList,
  ProductCard,
  ProductDetails,
  ProductSpecs,
  RelatedProducts,
  DashboardStats,
  DataTable,
  DashboardNav,
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
