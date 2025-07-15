"use client";
import React from 'react';
import {Product} from "@/types/theme";

interface ProductDetailsProps {
    props: {
        title: string;
        price: string;
        description: string;
        image?: string;
    },
    data?: {
        product: Product;
    }
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({props, data}) => {

    const product = data?.product

    return (
        <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-lg shadow-md object-cover aspect-square"
                />
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-primary font-semibold mb-4">{product.price}</p>
                {/*<p className="text-gray-600 mb-6">{product.description}</p>*/}
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">
                    Add to Cart
                </button>
            </div>
        </section>
    );
};
