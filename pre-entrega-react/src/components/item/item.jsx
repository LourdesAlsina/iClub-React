import '../../style.css'
import { NavLink as RRNavLink, useParams } from 'react-router-dom'

function Item({product}) {    
    return (
    <div className='Item'>
       <h1>{product.title}</h1>
       <img src={product.Image}/>   
       <RRNavLink exact to={`/itemDetail/${product.id}`} className='navLink' activeClassName='active'>
            <button>Comprar</button>
        </RRNavLink>        
    </div>
    )
}

export default Item;