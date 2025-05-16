import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: "First",
    price: 200,
    image: "https://themes.programmingkit.xyz/rafcart/assets/images/product8.jpg",
  },
  {
    name: "Second",
    price: 699,
    image: "https://themes.programmingkit.xyz/rafcart/assets/images/product9.jpg",
  },
  {
    name: "Third",
    price: 599,
    image: "https://themes.programmingkit.xyz/rafcart/assets/images/product9.jpg",
  },
];

const App: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default App;
