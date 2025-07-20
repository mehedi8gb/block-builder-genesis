import React from 'react';
import {CategoryGridProps} from "@/types/theme";
import {useCategoryStore} from "@/stores/useCategoryStore";

export const CategoryGrid_V1: React.FC<CategoryGridProps> = ({
                                                                 props
                                                             }) => {
    const gridCols = {
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
    }[props.columns] || 'grid-cols-3';

    const categories = useCategoryStore((state) => state.getAllCategories());

    return (
        <section className={`py-16 px-4 ${props.className}`}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 font-heading">
                    Shop by Category
                </h2>
                <div className={`grid ${gridCols} gap-6`}>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold font-base">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
