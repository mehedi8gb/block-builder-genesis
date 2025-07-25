// src/stores/useProductStore.ts

import {create} from 'zustand';
import {Product} from '@/core/types/theme';
import {productList} from '@/core/data/products';

interface ProductStore {
    products: Product[];
    getBySlug: (slug: string) => Product | undefined;
    getById: (id: number | string) => Product | undefined;
    getAllProducts: () => Product[];
}

export const useProductStore = create<ProductStore>((set, get) => ({
    products: productList,

    getBySlug: (slug) =>
        get().products.find((product) => product.slug === slug),

    getById: (id) =>
        get().products.find((product) => product.id === id),

    getAllProducts: () =>
        get().products,
}));
