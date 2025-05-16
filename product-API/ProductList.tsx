import React from 'react';
import { Product } from '../App';

interface Props {
  products: Product[];
  onRemove: (id: number) => void;
}

const ProductList: React.FC<Props> = ({ products, onRemove }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '1rem'
    }}>
      {products.map(product => (
        <div key={product.id} style={{
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <img src={product.image} alt={product.title} style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }} />
          <h2 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{product.title}</h2>
          <p>${product.price}</p>
          <button
            onClick={() => onRemove(product.id)}
            style={{
              marginTop: '10px',
              padding: '5px 10px',
              backgroundColor: '#dc2626',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
