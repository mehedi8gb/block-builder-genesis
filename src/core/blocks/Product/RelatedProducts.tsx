"use client";
import React from 'react';

interface Product {
    id: string | number;
    name: string;
    price: string;
    image: string;
}

interface RelatedProductsProps {
    props: {
        title: string;
        products: Product[];
    }
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({props}) => (
    <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8">{props.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {props.products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 text-center">
                    <img src={product.image} alt={product.name} className="aspect-square object-cover rounded mb-2"/>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-primary font-medium">{product.price}</p>
                </div>
            ))}
        </div>
    </section>
);
