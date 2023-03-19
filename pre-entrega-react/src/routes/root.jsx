import React from 'react'
import '../style.css'
import '../App.css'
import '../components/navBar.css'
import CardWidget from '../components/cardWidget/index'
import ItemListConteiner from '../components/itemListConteiner/index'
import { NavLink as RRNavLink, useParams } from 'react-router-dom'

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

function NavBar() {
  return (
    <nav className='navBar'>
      <RRNavLink exact to="/" className='navLink' activeClassName='active'>
        Inicio
      </RRNavLink>
      <RRNavLink to="/productos" className='navLink' activeClassName='active'>
        Productos
      </RRNavLink>
      <RRNavLink to="/category/usado" className='navLink' activeClassName='active'>
        Usados
      </RRNavLink>
      <RRNavLink to="/servicios" className='navLink' activeClassName='active'>
        Servicios
      </RRNavLink>
      <RRNavLink to="/contactos" className='navLink' activeClassName='active'>
        Contactos
      </RRNavLink>
      <input type='text' placeholder='Buscar' className='navSearch' />
      <CardWidget />
    </nav>
  );
}

export default Root
