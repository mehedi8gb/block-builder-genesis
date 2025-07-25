"use client";
import React from "react";
import Link from "next/link";
import {ProductCardProps} from "@/core/types/theme";

export const ProductCard: React.FC<ProductCardProps> = ({
                                                            products,
                                                            child
                                                        }) => {
    return (
        <>
            {products.map((product) => (
                <Link key={product.id} href={`/product/${product.slug || product.id}`}>
                    <div
                        key={product.id}
                        className={`rounded-xl p-4 shadow-md backdrop-blur-md transition hover:scale-[1.02] bg-white dark:bg-white/5 ${child.className || ''}`}
                    >
                        {/* Image Container */}
                        <div
                            className={`aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-white/10 ${child.imageClass || ''}`}
                        >
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="space-y-1">
                            <h3
                                className={`text-lg font-semibold text-gray-800 dark:text-white ${child.titleClass || ''}`}
                            >
                                {product.name}
                            </h3>
                            <p
                                className={`text-base font-bold mt-1 text-primary dark:text-cyan-400 ${child.priceClass || ''}`}
                            >
                                {product.price}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );

};
