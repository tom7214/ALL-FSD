import React from 'react';

type Product = {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: 'COWIN E7 Active',
    price: '$45.00',
    oldPrice: '$55.45',
    rating: 5,
    reviews: 120,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.',
    image: '/images/products/headphones.png',
  },
  {
    id: 2,
    title: 'Apple iPhone XR',
    price: '$45.00',
    oldPrice: '$55.45',
    rating: 4,
    reviews: 102,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.',
    image: '/images/products/iphone.png',
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 py-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex bg-white shadow-sm p-4 rounded-md border"
        >
          {/* Product Image */}
          <div className="w-1/3 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="w-2/3 pl-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="flex items-center mt-1 space-x-2">
                <span className="text-red-500 font-semibold">{product.price}</span>
                <span className="line-through text-gray-400 text-sm">{product.oldPrice}</span>
              </div>
              <div className="flex items-center text-yellow-500 text-sm mt-1">
                {'★'.repeat(product.rating)}
                {'☆'.repeat(5 - product.rating)}
                <span className="text-gray-500 ml-2">({product.reviews})</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex space-x-4">
              <button className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600">
                Add to Cart
              </button>
              <button className="border border-red-500 text-red-500 text-sm px-4 py-2 rounded hover:bg-red-100">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
