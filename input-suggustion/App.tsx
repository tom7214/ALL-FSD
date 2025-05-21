import React, { useState, useEffect, useRef } from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl"
        onError={(e) => {
          e.currentTarget.src = https://placehold.co/400x300/CCCCCC/333333?text=No+Image;
        }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-700 text-lg mb-3">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-extrabold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const allProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      description: 'Immersive sound experience with noise cancellation.',
      imageUrl: 'https://placehold.co/400x300/A0A0A0/FFFFFF?text=Headphones',
    },
    {
      id: 2,
      name: 'Smartwatch Pro',
      price: 199.99,
      description: 'Track your fitness and stay connected on the go.',
      imageUrl: 'https://placehold.co/400x300/B0B0B0/FFFFFF?text=Smartwatch',
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      price: 49.99,
      description: 'Compact and powerful sound for any adventure.',
      imageUrl: 'https://placehold.co/400x300/C0C0C0/FFFFFF?text=Speaker',
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: 59.99,
      description: 'Precision gaming mouse with customizable RGB.',
      imageUrl: 'https://placehold.co/400x300/D0D0D0/FFFFFF?text=Gaming+Mouse',
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      price: 129.99,
      description: 'Tactile and responsive keys for ultimate typing.',
      imageUrl: 'https://placehold.co/400x300/E0E0E0/FFFFFF?text=Keyboard',
    },
    {
      id: 6,
      name: 'Webcam 1080p',
      price: 79.99,
      description: 'Full HD webcam for crystal clear video calls.',
      imageUrl: 'https://placehold.co/400x300/F0F0F0/FFFFFF?text=Webcam',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(allProducts);
  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (searchTerm.trim() === '') {
      setSuggestions([]);
      setDisplayedProducts(allProducts);
      return;
    }

    debounceTimeoutRef.current = setTimeout(() => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      const newSuggestions = allProducts
        .filter(product => product.name.toLowerCase().includes(lowerCaseSearchTerm))
        .map(product => product.name);

      setSuggestions(newSuggestions);

      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.description.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setDisplayedProducts(filtered);

    }, 1000);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchTerm, allProducts]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 font-sans">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center drop-shadow-lg">
        Featured Products
      </h1>

      <div className="relative w-full max-w-md mb-12">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-4 pl-5 pr-12 text-lg border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm.length > 0 && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-2 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-3 cursor-pointer hover:bg-indigo-100 text-gray-800 text-lg transition duration-150 ease-in-out"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {displayedProducts.length === 0 && searchTerm.length > 0 ? (
        <p className="text-gray-700 text-2xl font-semibold">No products found matching "{searchTerm}"</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;