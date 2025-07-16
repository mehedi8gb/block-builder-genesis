// src/stores/useCategoryStore.ts

import { create } from 'zustand';
import { Category } from '@/types/theme';
import { categoryList } from '@/data/categories';

interface CategoryStore {
    categories: Category[];
    getBySlug: (slug: string) => Category | undefined;
    getById: (id: number | string) => Category | undefined;
    getAllCategories: () => Category[];
}

export const useCategoryStore = create<CategoryStore>((set, get) => ({
    categories: categoryList,

    getBySlug: (slug) =>
        get().categories.find((category) => category.slug === slug),

    getById: (id) =>
        get().categories.find((category) => category.id === id),

    getAllCategories: () =>
        get().categories,
}));
