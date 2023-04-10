import '../../style.css'
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import {doc,  getDoc,  getFirestore} from "firebase/firestore"
import { useEffect } from 'react'
import { useState } from 'react'

function Item({product}) {    
    

    /*useEffect(() => {
        const db = getFirestore()
        const itemRef = doc(db, "items", "4M1XhS8ui59x67b5ow6U")

        getDoc(itemRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                setProducts({id: snapshot.id, ...snapshot.data()})
            }
        }).catch((error) => concole.log({error}))
       
    }, [])
    console.log({products})
*/
    
    return (
    <div className='Item'>
       <h1>{product.title}</h1>
       <img src={product.image}/>   
       <RRNavLink exact to={`/itemDetail/${product.id}`} className='navLink' activeClassName='active'>
            <button>Comprar</button>
        </RRNavLink>        
    </div>
    )
}

export default Item;