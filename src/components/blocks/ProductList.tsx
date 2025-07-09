"use client";
import React from 'react';
import { Product } from './ProductCard';
import { BlockRegistry } from '@/lib/BlockRegistry';

interface ProductListProps {
    title?: string;
    products?: Product[];
    columns?: number;
    className?: string;
}

interface Child {
    block: string;
    className?: string;
}

interface ProductListBlockProps {
    title?: string;
    products?: Product[];
    columns?: number;
    className?: string;
    child?: Child; // Optional child block configuration
}

export const ProductList: React.FC<ProductListBlockProps> = ({
                                                                 title = "Featured Products",
                                                                 columns = 4,
                                                                 products = [],
                                                                 className = "",
                                                                 child = {},
                                                             }) => {

    const gridCols = {
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5'
    }[columns] || 'grid-cols-4';

    const CardComponent = child?.block ? BlockRegistry[child.block] : null;

    return (
        <section className={className}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 font-heading">
                    {title}
                </h2>
                <div className={`grid ${gridCols} gap-8`}>
                    {products.map((product, index) => {
                        const key = `product-${product.id}-${index}`;
                        return CardComponent ? (
                            <CardComponent
                                key={key}
                                product={product}
                                child = {child}
                            />
                        ) : (
                            <div key={key}>⚠️ Invalid card block</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
