import '../../style.css'
import NavBar1 from '../NavBar/navBar1';
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/context';
import Products from "../../mocks/products"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {collection, getFirestore, addDoc, doc, updateDoc} from "firebase/firestore"
import products from '../../mocks/products';




function Checkout() {
    const appContext = useContext(Context)
    const db = getFirestore() 

    function updateOrder(productId, finalStock) {
        const itemRef = doc(db, "items", productId)
        updateDoc(itemRef, {stock: finalStock})
    }

    function FinalizarCompra() {
        const order = {
            buyer: { name: "Agustin", phone: "35785421", email:"agus@gmail.com"}, 
            items: appContext.productsCart,
            total: appContext.total
        }

       
       const collectionRef = collection(db, "orders")
       addDoc(collectionRef, order)
        .then(() => {
            appContext.productsCart.map((product) => {
                const finalStock = product.stock - product.quantity
                updateOrder(product.id, finalStock)    
        })
        })
        .catch((error) => console.log({ error}))
    }

    console.log(appContext.productsCart)
        return (  
            <div> 
            <NavBar1 />
            <h1>Detalle de compra</h1>
            <ul className='PCartContainer'>                              
                {appContext.productsCart.map((product, index) => (             
                <div className='Item'>                    
                    <img src={product.image}/>   
                    <div className='cart-product-checkout' key={product.id}>
                            <p className='titulo-producto-carrito-checkout'>
                                {product.title}
                            </p>
                            <span className='precio-producto-carrito-checkout'>
                               Precio unitario: ${product.price}
                            </span>
                        <div className='cantidad'>
                            <FontAwesomeIcon icon={faPlus} onClick={() => appContext.sumar(product)}/>
                            <span className='cantidad-producto-carrito-checkout'>{product.quantity}</span>
                            <FontAwesomeIcon icon={faMinus} onClick={() => appContext.restar(product)}/>
                            <FontAwesomeIcon id='delete' icon={faTrash} onClick={() => appContext.onDeleteProduct(product)} />
                        </div>
                    </div>       
                </div>
                ))}
            </ul>
            <div className='total-card'>
                <div className='cart-total'>
                            <h3>Total:</h3>
                            <span className='total-pagar'>${appContext.total}</span>
                    </div>
                    <button  className='btn-clear-all' onClick={appContext.onCleanCart}>
                            Vaciar Carrito
                    </button>
                    <button className='btn-clear-all' onClick={FinalizarCompra}>
                            Finalizar compra
                    </button>
                </div>
            </div>
            )      
}


export default Checkout 