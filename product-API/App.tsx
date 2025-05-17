import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem('electronicsProducts');
    if (localData) {
      setProducts(JSON.parse(localData));
    } else {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data: Product[]) => {
          const electronics = data.filter(product => product.category === 'electronics');
          localStorage.setItem('electronicsProducts', JSON.stringify(electronics));
          setProducts(electronics);
        });
    }
  }, []);

  const handleRemove = (id: number) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('electronicsProducts', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Electronics Products</h1>
      <ProductList products={products} onRemove={handleRemove} />
      <div style={{ marginTop: '1rem', textAlign: 'right' }}>
        <strong>Displayed Products: {products.length}</strong>
      </div>
    </div>
  );
};

export default App;
