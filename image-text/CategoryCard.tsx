import React from 'react';

type CategoryCardProps = {
  image: string;
  text: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ image, text }) => {
  return (
    <div
      className="relative w-full h-60 overflow-hidden rounded-md shadow-md group"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-50">
        <h2 className="text-white text-lg font-semibold">{text}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
