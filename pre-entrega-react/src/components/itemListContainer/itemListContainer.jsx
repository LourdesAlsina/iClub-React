import '../../style.css'
import NavBar1 from '../NavBar/navBar1';
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import ItemList from '../itemList/itemList';
import { useEffect, useState } from 'react'
import Products from "../../mocks/products"
import {collection,  getDocs,  getFirestore, query, where} from "firebase/firestore"


function itemListContainer() {
    const params = useParams()
    const categoryId = params.id
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const db = getFirestore()
      const itemCollection = collection(db, "items")
      const queryResult = query(itemCollection, 
          where("category", "==", categoryId)
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
      
  }, [categoryId])
  console.log(products)

 /*   
  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) => 
    setTimeout(() => resolve(Products), 100) 
    );
    productsPromise
    .then((response) => setProducts(response))
    .catch((err) => console.log(err));
  }, []);*/
    
    return (
    <div>
        <NavBar1 />
        <ItemList params={params.id} products={products}/>              
    </div>
    )
}

export default itemListContainer;