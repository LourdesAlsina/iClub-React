import '../../style.css'
import NavBar1 from '../NavBar/navBar1';
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import ItemList from '../itemList/itemList';
import { useEffect, useState } from 'react'
import Products from "../../mocks/products"

function itemListContainer() {
    const params = useParams()
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) => 
    setTimeout(() => resolve(Products), 1000) 
    );
    productsPromise
    .then((response) => setProducts(response))
    .catch((err) => console.log(err));
  }, []);
    return (
    <div>
        <NavBar1 />
        <ItemList params={params.id} products={products}/>        
    </div>
    )
}

export default itemListContainer;