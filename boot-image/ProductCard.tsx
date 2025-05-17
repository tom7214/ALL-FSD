import React from 'react';

const ProductCard: React.FC = () => {
  const thumbnails: string[] = [
    '/images/shoes/thumb1.png',
    '/images/shoes/thumb2.png',
    '/images/shoes/thumb3.png',
    '/images/shoes/thumb4.png',
    '/images/shoes/thumb5.png',
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg max-w-6xl mx-auto">

      <div className="flex flex-col items-center md:w-1/2">
        <img
          src="/images/shoes/main.png"
          alt="Main Shoe"
          className="w-full max-w-md mb-4"
        />
        <div className="flex space-x-2 overflow-x-auto">
          {thumbnails.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 border-2 rounded-md hover:border-red-500 cursor-pointer"
            />
          ))}
        </div>
      </div>

      
      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <h2 className="text-xl font-bold text-gray-800 mb-2">MEN'S ADIDAS COURTSMASH</h2>
        <div className="flex items-center space-x-1 mb-2">
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
          <span className="ml-2 text-gray-600 text-sm">(18 Reviews)</span>
        </div>
        <p className="text-green-600 text-sm font-medium">Availability: In Stock</p>
        <p className="text-gray-600 text-sm">Brand: Adidas</p>
        <p className="text-gray-600 text-sm">Category: Shoes</p>
        <p className="text-gray-600 text-sm mb-2">SKU: AD12345</p>

        <div className="mt-2 mb-4">
          <p className="line-through text-gray-500">$500.00</p>
          <div className="flex items-center space-x-2">
            <p className="text-red-600 font-semibold text-xl">$410.00</p>
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded">-18%</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Breathable comfort and a soft feel. Adidas delivers this lightweight shoe with premium cushioning for maximum comfort.
        </p>

        <div className="flex space-x-4">
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">Add to Cart</button>
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-100 transition">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
