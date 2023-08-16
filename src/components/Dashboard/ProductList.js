import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        // Maneja el error según tus necesidades
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
