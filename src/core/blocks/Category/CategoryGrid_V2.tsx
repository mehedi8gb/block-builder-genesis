"use client";

import React from "react";
import {useCategoryStore} from "@/core/stores/useCategoryStore";
import {
    sectionWrapper, textBlockHeading, gridContainer, cardItem
} from '@/core/variants/designVariants';

import type {CategoryGridProps} from "@/core/types/theme";
import {mergeClasses} from "@/core/utils/classUtils";


export const CategoryGrid_V2: React.FC<CategoryGridProps> = ({props}) => {
    const categories = useCategoryStore((state) => state.getAllCategories());

    const {
        columns = 3,
        spacing = "md",
        rounded = "lg",
        shadow = "md",
        animate = "fade",
        align = "center",
        justify = "start",
        className = "",
        title = "Discover Categories",
        bgColor = "none",
        headingSize = "lg",
        headingColor = "dark",
        headingSpacing = "normal"
    } = props;

    return (
        <section className={mergeClasses(sectionWrapper({bgColor, align}), className)}>
            <div className="max-w-6xl mx-auto">
                {title && (
                    <h2
                        className={textBlockHeading({
                            size: headingSize,
                            color: headingColor,
                            spacing: headingSpacing
                        })}
                    >
                        {title}
                    </h2>
                )}

                <div
                    className={gridContainer({
                        columns,
                        spacing,
                        justify,
                        align
                    })}
                >
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={mergeClasses(
                                cardItem({rounded, shadow, animate}),
                                "group overflow-hidden h-48 relative"
                            )}
                            style={{
                                backgroundImage: `url(${category.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <div
                                className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"/>
                            <div
                                className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl z-10">
                                {category.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
