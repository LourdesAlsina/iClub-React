import React from 'react'
import '../../style.css'
import Products from '../../mocks/products'
import products from '../../mocks/products'
import ItemList from '../itemList'
import { useEffect, useState } from 'react' 
import Products from "../../mocks/products"


function ItemListConteiner({ greeting }) {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const productsPromise = new Promise((resolve, reject) => setTimeout(() => resolve(Products), 2000));
        products
        .then((Response) =>setProducts(Response))
        .catch((err)=> console.log(err));
    }, [])
    console.log({products});


    return (
    <div>
        <ul>
            <ItemList products={products} />
        </ul>
    </div>        
    ) 
}

export default ItemListConteiner


