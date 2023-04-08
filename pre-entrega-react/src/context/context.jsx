import { createContext } from "react";
import { useState } from "react";
import Products from "../mocks/products"

export const Context = createContext();

export function CustomProvider({ children }) {
/* Estados Carrito */    
const [productsCart, setProductsCart] = useState([]);
const [total, setTotal] = useState(0);
const [countProducts, setCountProducts] = useState(0);
/* Navbar1 */
const [active, setActive] = useState(false)
/* Funciones Carrito */
const onAddProduct = product => {
		if (productsCart.find(item => item.id === product.id)) {
			const products = productsCart.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setProductsCart([...products]);
		}
		
		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setProductsCart([...productsCart, product]);
    };
/* Funciones NavBar1 */
	const onDeleteProduct = product => {
		const results = productsCart.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setProductsCart(results);
	};

	const sumar = product => {
		const products = productsCart.map(item =>
			item.id === product.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
		setTotal(total + product.price * 1);
		setCountProducts(countProducts + 1);
		return setProductsCart([...products]);
	};

	const restar = product => {
	if (productsCart.find(item => item.id === product.id && product.quantity > 1)) {	
		const products = productsCart.map(item =>
			item.id === product.id
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
		setTotal(total - product.price * 1);
		setCountProducts(countProducts - 1);
		return setProductsCart([...products]);
	} else {
		const results = productsCart.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setProductsCart(results);
	}
	};

	

	const onCleanCart = () => {
		setProductsCart([]);
		setTotal(0);
		setCountProducts(0);
	};

const value = {
    productsCart,
    setProductsCart,
    total,
    setTotal,
    countProducts,
    setCountProducts,
    onAddProduct,
    active,
    setActive,
    onDeleteProduct,
    onCleanCart,
	sumar,
	restar
}    
    return <Context.Provider value={value}> {children} </Context.Provider>           
}

export default CustomProvider




  
    
  

