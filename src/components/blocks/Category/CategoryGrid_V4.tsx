import React from 'react';
import { CategoryGridProps } from '@/types/theme';
import { ShoppingBag, Tag, Gift } from 'lucide-react';
import {useCategoryStore} from "@/stores/useCategoryStore";

const icons = [ShoppingBag, Tag, Gift];

export const CategoryGrid_V4: React.FC<CategoryGridProps> = ({
                                                                 props
                                                             }) => {
    const gridCols = {
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
    }[props.columns] || 'grid-cols-3';

    const categories = useCategoryStore((state) => state.getAllCategories());

    return (
        <section className={`py-16 px-6 bg-gray-50 ${props.className}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                    Browse Categories
                </h2>
                <div className={`grid ${gridCols} gap-6`}>
                    {categories.map((category, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 text-center transition-all duration-300 group"
                            >
                                <div className="flex justify-center mb-4 text-primary-600">
                                    <Icon className="w-10 h-10 group-hover:scale-110 transition" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
