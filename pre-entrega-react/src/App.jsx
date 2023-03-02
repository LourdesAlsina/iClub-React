import React from 'react'
import './style.css'
import './App.css'
import './components/navBar.css'
import CardWidget from './components/cardWidget/index'
import ItemListConteiner from './components/itemListConteiner/index'


function App() {
  
  return (
    <React.Fragment>
      <div>
        <Title value={"iClub"} />
        <NavBar />
        <ItemListConteiner greeting={"Bienvenido a iClub"} />
      </div>
    </React.Fragment>
  )
}

function Title({value}) {
  return <h1 className='title'>{value}</h1>   
}

function NavBar() {
    return ( 
    <React.Fragment>
      <div> 
        <nav className='navBar'>
        <ul><li><a href="#">Inicio</a></li></ul> 
        <ul><li><a href="#">Productos</a></li></ul>
        <ul><li><a href="#">Servicios</a></li></ul>
        <ul><li><a href="#">Contacto</a></li></ul>
        <ul><li><input type="Buscar" /></li></ul>
        <CardWidget />
        </nav> 
      </div>
    </React.Fragment>  
    ) 
}

export default App

