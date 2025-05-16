import React from 'react';
import CategoryCard from './CategoryCard';

const CategorySection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto p-4">
      <CategoryCard
        image="https://themes.programmingkit.xyz/rafcart/assets/images/category-1.jpg"
        text="Bedroom"
      />
      <CategoryCard
        image="https://themes.programmingkit.xyz/rafcart/assets/images/category-2.jpg"
        text="Mattresses"
      />
      <CategoryCard
        image="https://themes.programmingkit.xyz/rafcart/assets/images/category-3.jpg"
        text="Office"
      />
    </div>
  );
};

export default CategorySection;
