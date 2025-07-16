import React from 'react';
import { CategoryGridProps } from '@/types/theme';
import {useCategoryStore} from "@/stores/useCategoryStore";

export const CategoryGrid_V3: React.FC<CategoryGridProps> = ({
                                                                 props
                                                             }) => {
    const gridCols = {
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
    }[props.columns] || 'grid-cols-3';

    const categories = useCategoryStore((state) => state.getAllCategories());

    return (
        <section className={`py-20 px-6 backdrop-blur-sm bg-white/10 dark:bg-black/10 ${props.className}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 dark:text-white">
                    Explore Categories
                </h2>
                <div className={`grid ${gridCols} gap-8`}>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white/20 dark:bg-white/10 p-8 text-center text-white shadow-xl backdrop-blur-md border border-white/30 hover:scale-105 transform transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
