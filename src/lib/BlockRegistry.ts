//
// import { Hero_V1 } from '@/core/blocks/Hero/Hero_V1';
// import { Hero_V2 } from '@/core/blocks/Hero/Hero_V2';
// import {Hero_V3} from "@/core/blocks/Hero/Hero_V3";
// import { CategoryGrid_V1 } from '@/core/blocks/Category/CategoryGrid_V1';
// import {CategoryGrid_V2} from "@/core/blocks/Category/CategoryGrid_V2";
// import {CategoryGrid_V3} from "@/core/blocks/Category/CategoryGrid_V3";
// import {CategoryGrid_V4} from "@/core/blocks/Category/CategoryGrid_V4";
// import { FooterLinks } from '@/core/blocks/Footer/FooterLinks';
// import { TextBlock } from '@/core/blocks/TextBlock/TextBlock';
// import { ProductList } from "@/core/blocks/Product/ProductList";
// import {ProductCard} from "@/core/blocks/Product/ProductCard";
// import { DashboardStats } from '@/components/blocks/DashboardStats';
// import { DataTable } from '@/components/blocks/DataTable';
// import { DashboardNav } from '@/components/blocks/DashboardNav';
// import { Header_V1 } from '@/core/blocks/Header/Header_V1';
// import {ProductDetails} from "@/core/blocks/Product/ProductDetails";
// import {ProductSpecs} from "@/core/blocks/Product/ProductSpecs";
// import {RelatedProducts} from "@/core/blocks/Product/RelatedProducts";
// import {Header_V2} from "@/core/blocks/Header/Header_V2";
//
// // Centralized registry of all available blocks
// export const BlockRegistry = {
//   Header_V1,
//   Header_V2,
//   Hero_V1,
//   Hero_V2,
//   Hero_V3,
//   CategoryGrid_V1,
//   CategoryGrid_V2,
//   CategoryGrid_V3,
//   CategoryGrid_V4,
//   FooterLinks,
//   TextBlock,
//   ProductList,
//   ProductCard,
//   ProductDetails,
//   ProductSpecs,
//   RelatedProducts,
//   DashboardStats,
//   DataTable,
//   DashboardNav,
// } as const;
//
// // Type for available block names
// export type BlockName = keyof typeof BlockRegistry;
//
// // Security: Only allow registered components
// export function getBlockComponent(blockName: string) {
//   if (!(blockName in BlockRegistry)) {
//     console.warn(`Block "${blockName}" not found in registry. Available blocks:`, Object.keys(BlockRegistry));
//     return null;
//   }
//   return BlockRegistry[blockName as BlockName];
// }
//
// // Get list of available blocks for admin interfaces
// export function getAvailableBlocks(): BlockName[] {
//   return Object.keys(BlockRegistry) as BlockName[];
// }
