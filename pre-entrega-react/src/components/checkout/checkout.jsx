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



function Checkout() {
    const appContext = useContext(Context)  

    console.log(appContext.productsCart[0])
        return (  
            <div> 
            <NavBar1 />
            <h1>Detalle de compra</h1>
            <ul className='PCartContainer'>                              
                {appContext.productsCart.map((product, index) => (             
                <div className='Item'>                    
                    <img src={product.Image}/>   
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
                    <button className='btn-clear-all'>
                            Finalizar compra
                    </button>
                </div>
            </div>
            )      
}


export default Checkout 