import React from 'react';

interface Product {
  name: string;
  price: number;
  Image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-4">
        <img
          src={product.Image}
          alt={product.name}
          className="w-24 h-24 object-contain rounded-md flex-shrink-0"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://placehold.co/96x96/E0E0E0/333333?text=No+Image';
          }}
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800 break-words max-w-xs">
            {product.name.toUpperCase()}
          </h2>
          <p className="text-red-600 font-bold text-xl mt-1">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
      <p className="text-red-600 font-bold text-xl flex-shrink-0">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
};

const products: Product[] = [
  {
    name: "XB450AP EXTRA BASS HEADPHONES",
    price: 45.00,
    Image: "https://themes.programmingkit.xyz/rafcart/assets/images/product8.jpg",
  },
  {
    name: "IPHONE 11 PRO MAX XR",
    price: 499.00,
    Image: "https://themes.programmingkit.xyz/rafcart/assets/images/product9.jpg",
  },
  {
    name: "Another Product Example",
    price: 125.50,
    Image: "https://placehold.co/100x100/ADD8E6/000000?text=PRODUCT+C",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Product Listing
        </h1>
        <div className="space-y-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
