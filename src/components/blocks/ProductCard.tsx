"use client";
import React from 'react';

export interface Product {
    id: number | string;
    name: string;
    price: string;
    image?: string;
}

export interface Child {
    block: string;
    className?: string;
}

export interface ProductCardProps {
    product: Product;
    child?: Child;
}

export const ProductCard: React.FC<ProductCardProps> = ({
                                                            product,
                                                            child
                                                        }) => {
    return (
        <div className={`${child.className || ''}`}>
            <div className="aspect-square bg-gray-100 mb-4 rounded overflow-hidden">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        No Image
                    </div>
                )}
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-primary font-bold mt-2">{product.price}</p>
        </div>
    );
};
