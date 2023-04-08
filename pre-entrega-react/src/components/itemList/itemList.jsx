import '../../style.css'
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import Item from '../item/item';



function ItemList({params, products}) {    
    const category = params
    const productsFiltered = products.filter(product => product.category == category)

    return (
    <div>        
        <ul>
            {productsFiltered.map((product, index) => (
                <Item product={product}/>
            ))}            
        </ul>                
    </div>
    )
}

export default ItemList;