
import React from 'react';

interface CategoryGridProps {
  categories?: string[];
  columns?: number;
  className?: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  categories = ["Category 1", "Category 2", "Category 3"], 
  columns = 3,
  className = ""
}) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns] || 'grid-cols-3';

  return (
    <section className={`py-16 px-4 ${className}`}>
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
              <h3 className="text-xl font-semibold font-base">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
