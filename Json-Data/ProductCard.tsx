import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-24 h-24 object-contain" />
        <div>
          <h2 className="text-lg font-semibold">{name.toUpperCase()}</h2>
          <p className="text-red-500 font-semibold">${price.toFixed(2)}</p>
        </div>
      </div>
      <p className="text-red-500 font-semibold">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
