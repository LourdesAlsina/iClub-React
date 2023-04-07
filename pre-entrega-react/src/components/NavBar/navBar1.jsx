import '../../style.css'
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


function NavBar1({
	productsCart,
	setProductsCart,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) {
 
    const [active, setActive] = useState(false)

    const onDeleteProduct = product => {
		const results = productsCart.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setProductsCart(results);
	};

	const onCleanCart = () => {
		setProductsCart([]);
		setTotal(0);
		setCountProducts(0);
	};

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
                            onClick={() => setActive(!active)}
                            >
                                <a href="#" class="cart-icon"><i class="fas fa-shopping-cart"></i></a>
                            </div>
                            <div className='count-products'>
						        <span id='contador-productos'>0</span>
					        </div>
                        </div>
                        <div
					    className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					    }`}
				        >
                         {productsCart !== undefined ? (    
                            <>
                                {productsCart.length  ? (
                                            <>
                                                <div className='row-product'>
                                                    {productsCart.map(product => (
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
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className='cart-total'>
                                                    <h3>Total:</h3>
                                                    <span className='total-pagar'>${total}</span>
                                                </div>

                                                <button className='btn-clear-all' onClick={onCleanCart}>
                                                    Vaciar Carrito
                                                </button>
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