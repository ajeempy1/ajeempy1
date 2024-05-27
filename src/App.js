import React from 'react';
import ProductList from './ProductList';

function App() {
  // Use the ProductList component to fetch and retrieve the products
  const products = ProductList();

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
