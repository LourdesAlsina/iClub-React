import '../../style.css'
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Products from "../../mocks/products"
import NavBar1 from '../NavBar/navBar1';
import { useContext } from 'react';
import { Context } from '../../context/context';
import {collection,  getDocs,  getFirestore, query, where} from "firebase/firestore"

function ItemDetail() {
    const appContext = useContext(Context)  
    const params = useParams()
    const idProduct = params.id 
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection(db, "items")
        const queryResult = query(itemCollection, 
            where("id", "==", Number(idProduct))
            );
        getDocs(queryResult)
        .then((snapshot) => {
            const docs = snapshot.docs;
            setProducts(
              docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            )
        }).catch((error) => concole.log({error}))
        
    }, [idProduct])
    console.log(products)

  /*useEffect(() => {
    const productsPromise = new Promise((resolve, reject) => 
    setTimeout(() => resolve(Products), 100) 
    );
    productsPromise
    .then((response) => {
    if(idProduct){
    const productsFiltered = response.filter((products) => products.id === Number(idProduct));
    setProducts(productsFiltered);    
    }    
    else{
    setProducts(response);    
    }
})
    .catch((err) => console.log(err));
  }, []);
  
    console.log(products)*/
    
    return (
        <div>
            <NavBar1 />                
            {products.map((product, index) => (                              
               <div class="detail-container">
                    <div class="detail-image">
                        <img src={product.image} />
                    </div>
                    <div class="detail-info">
                        <h1 class="detail-title">{product.title}</h1>
                        <div class="detail-description">Descripción: {product.description}</div>
                        <div class="detail-price">Precio: {new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(product.price)}</div>
                        <div class="detail-category">Categoría: {product.category}</div>
                        <div class="detail-stock">Productos en stock: {product.stock}</div>
                        <button class="add-to-cart" onClick={() => appContext.onAddProduct(product)}>
                            <i class="fas fa-shopping-cart"></i> Agregar al carrito
                        </button>
                    </div>
               </div>                
            ))}                                    
        </div>
    )
}

export default ItemDetail;