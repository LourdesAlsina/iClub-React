import '../../style.css'
import { NavLink as RRNavLink, useParams } from 'react-router-dom'
import CardWidget from '../cardWidget/cardWidget' 

function NavBar() {
    return (
       <div>
            <h1 className='titleIclub'>iCLUB</h1>  
            <nav className='navBar'>
                <RRNavLink exact to="/" className='navLink' activeClassName='active'>
                Inicio
                </RRNavLink>
                <RRNavLink to="/categoryP" className='navLink' activeClassName='active'>
                Productos
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
       </div>       
    );
  }

export default NavBar;