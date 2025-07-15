"use client";
import React from 'react';
import {BlockRegistry} from '@/lib/BlockRegistry';
import {ProductListBlockProps} from "@/types/theme";
import { useProductStore } from '@/stores/useProductStore';

export const ProductList: React.FC<ProductListBlockProps> = ({ props }) => {

    const gridCols = {
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5'
    }[props.columns] || 'grid-cols-4';

    const products = useProductStore((state) => state.getAllProducts());

    const CardComponent: React.ComponentType<any> = BlockRegistry[props?.child?.block as keyof typeof BlockRegistry]

    return (
        <section className={props.className}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 font-heading">
                    {props.title}
                </h2>
                <div className={`grid ${gridCols} gap-8`}>
                    <CardComponent
                        products={products}
                        child={props.child}
                    />
                </div>
            </div>
        </section>
    );
};
