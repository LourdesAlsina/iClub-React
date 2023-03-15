import React from 'react'
import '../../style.css'
import Products from '../../mocks/products'
import products from '../../mocks/products'
import ItemList from '../itemList'
import { useEffect, useState } from 'react' 
import Products from "../../mocks/products"


import { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListConteiner({ categoryId, isCategoryRoute }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        if (isCategoryRoute) {
          const filteredProducts = data.filter(
            (product) => product.categoryId === categoryId
          );
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [categoryId, isCategoryRoute]);

  return (
    <div>
      <ul>
        <ItemList products={products} />
      </ul>
    </div>
  );
}

export default ItemListConteiner;
