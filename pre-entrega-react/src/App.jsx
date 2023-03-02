import React from 'react'
import './style.css'
import './App.css'
import './components/navBar.css'
import cardWidget from './components/cardWidget/index'
import itemListConteiner from './components/itemListConteiner/index'


function App() {
  
  return (
    <React.Fragment>
      <div>
        <Title value={"iClub"} />
        <NavBar />
        <itemListConteiner greeting={"Bienvenido a iClub"} />
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
        <cardWidget />
        </nav> 
      </div>
    </React.Fragment>  
    ) 
}

export default App

