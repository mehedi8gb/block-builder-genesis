"use client";

import React from 'react';
import {CategoryGridProps} from '@/core/types/theme';
import {useCategoryStore} from "@/core/stores/useCategoryStore";
import {useVariants} from "@/core/variants/useVariants";
import {mergeClasses} from "@/core/utils/classUtils";

export const CategoryGrid_V2: React.FC<CategoryGridProps> = ({ props }) => {
    const categories = useCategoryStore((state) => state.getAllCategories());
    const { getVariantClasses } = useVariants();

    const gridCols = {
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
    }[props.columns] || 'grid-cols-3';

    const rootClassName = mergeClasses(
        'py-16 px-4',
        getVariantClasses('section', props.variant),
        props.className
    );

    return (
        <section className={rootClassName}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 font-heading">
                    {props.title || "Discover Categories"}
                </h2>
                <div className={`grid ${gridCols} gap-6`}>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={mergeClasses(
                                "relative h-48 rounded-lg overflow-hidden group cursor-pointer",
                                getVariantClasses('card', props.cardVariant)
                            )}
                            style={{
                                backgroundImage: `url(${category.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"/>
                            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl z-10">
                                {category.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};