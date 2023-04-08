import '../../style.css'
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { Context } from '../../context/context';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'

function NavBar1() {
    const appContext = useContext(Context)
    console.log(appContext.productsCart)      
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-logo">
                    <a href="#">IClub</a>
                 </div>
                <ul class="navbar-menu">
                    <li>
                        <RRNavLink exact to="/" className='navLink' activeClassName='active'>
                            Inicio
                        </RRNavLink>
                    </li>
                    <li>
                        <RRNavLink exact to="/categoryP" className='navLink' activeClassName='active'>
                            Productos
                        </RRNavLink>
                    </li>
                    <li>
                        <RRNavLink exact to="/servicios" className='navLink' activeClassName='active'>
                           Servicios
                        </RRNavLink>
                    </li>
                    <li>
                        <RRNavLink exact to="/contacto" className='navLink' activeClassName='active'>
                           Contacto
                        </RRNavLink>
                    </li>
                    
                </ul>
                <div class="navbar-right"> 
                    <div class="search-bar">
                        <input type="text" placeholder="Buscar..."/>
                        <button type="submit">Buscar</button>
                        <div className='container-icon'>
                            <div
                            className='container-cart-icon'
                            onClick={() => appContext.setActive(!appContext.active)}
                            >
                                <a href="#" class="cart-icon"><i class="fas fa-shopping-cart"></i></a>
                            </div>
                            <div className='count-products'>
						        <span id='contador-productos'>{appContext.countProducts}</span>
					        </div>
                        </div>
                        <div
					    className={`container-cart-products ${
                            appContext.active ? '' : 'hidden-cart'
					    }`}
				        >
                         {appContext.productsCart !== undefined ? (    
                            <>
                                {appContext.productsCart.length  ? (
                                            <>
                                                <div className='row-product'>
                                                    {appContext.productsCart.map(product => (
                                                        <div className='cart-product' key={product.id}>
                                                            <div className='info-cart-product'>
                                                                <span className='cantidad-producto-carrito'>
                                                                    {product.quantity}
                                                                </span>
                                                                <p className='titulo-producto-carrito'>
                                                                    {product.title}
                                                                </p>
                                                                <span className='precio-producto-carrito'>
                                                                    ${product.price}
                                                                </span>
                                                            </div>
                                                            <FontAwesomeIcon icon={faPlus} onClick={() => appContext.sumar(product)}/>
                                                            <FontAwesomeIcon icon={faMinus} onClick={() => appContext.restar(product)}/>
                                                            <FontAwesomeIcon icon={faTrash} onClick={() => appContext.onDeleteProduct(product)} />
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className='cart-total'>
                                                    <h3>Total:</h3>
                                                    <span className='total-pagar'>${appContext.total}</span>
                                                </div>

                                                <button className='btn-clear-all' onClick={appContext.onCleanCart}>
                                                    Vaciar Carrito
                                                </button>
                                               
                                                <RRNavLink exact to="/checkout" className='navLink' activeClassName='active'>
                                                <button id='checkout'> Ver compra </button>
                                                </RRNavLink>
                                                
                                            </>
                                        ) : (
                                            <p className='cart-empty'>El carrito está vacío</p>
                                        )}
                            </>
                            ) : (
                                <p className='cart-empty'>El carrito está vacío</p>
                            ) }
                            </div>
                     </div>
                </div>
                      
            </nav>
        </div>
        ) 
}

export default NavBar1;