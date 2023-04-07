import '../../style.css'
import NavBar1 from '../NavBar/navBar1';
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import ItemList from '../itemList/itemList';
import { useEffect, useState } from 'react'
import Products from "../../mocks/products"

function itemListContainer() {
    const params = useParams()
    const [products, setProducts] = useState([]);
    const [productsCart, setProductsCart] = useState([]);
    const [total, setTotal] = useState(0);
	  const [countProducts, setCountProducts] = useState(0);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) => 
    setTimeout(() => resolve(Products), 1000) 
    );
    productsPromise
    .then((response) => setProducts(response))
    .catch((err) => console.log(err));
  }, []);
    console.log(products)
    return (
    <div>
        <NavBar1 
          productsCart={productsCart}
          setProductsCart={setProductsCart}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <ItemList params={params.id} products={products}/>        
    </div>
    )
}

export default itemListContainer;