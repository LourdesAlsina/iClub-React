import React from 'react'
import './style.css'
import './App.css'
import './components/navBar.css'
import CardWidget from './components/cardWidget/index'
import ItemListConteiner from './components/itemListConteiner/index'
import{NavLink, useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id)
  return (
    <React.Fragment>
      <div>
        <Title value={"iClub"} />
        <NavBar />
        <ItemListConteiner isCategoryRoute={isCategoryRoute}
        categoryId={params.id} />
      </div>
    </React.Fragment>
  )
}

function Title({value}) {
  return <h1 className='title'>{value}</h1>   
}

import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navBar'>
      <NavLink exact to="/" className='navLink' activeClassName='active'>
        Inicio
      </NavLink>
      <NavLink to="/productos" className='navLink' activeClassName='active'>
        Productos
      </NavLink>
      <NavLink to="/category/usado" className='navLink' activeClassName='active'>
        Usados
      </NavLink>
      <NavLink to="/servicios" className='navLink' activeClassName='active'>
        Servicios
      </NavLink>
      <NavLink to="/contactos" className='navLink' activeClassName='active'>
        Contactos
      </NavLink>
      <input type='text' placeholder='Buscar' className='navSearch' />
      <CardWidget />
    </nav>
  );
}

export default NavBar;

export default Root