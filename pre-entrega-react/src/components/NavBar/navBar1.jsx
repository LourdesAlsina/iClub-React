import '../../style.css'
import { NavLink as RRNavLink, useParams } from 'react-router-dom'

function NavBar1() {
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-logo">
                    <a href="#">IClub</a>
                 </div>
                <ul class="navbar-menu">
                    <li>
                        <RRNavLink exact to="/" className='navLink' activeClassName='active'>
                            Inicio
                        </RRNavLink>
                    </li>
                    <li>
                        <RRNavLink exact to="/categoryP" className='navLink' activeClassName='active'>
                            Productos
                        </RRNavLink>
                    </li>
                    <li>
                        <RRNavLink exact to="/servicios" className='navLink' activeClassName='active'>
                           Servicios
                        </RRNavLink>
                    </li>
                    <li>
                        <RRNavLink exact to="/contacto" className='navLink' activeClassName='active'>
                           Contacto
                        </RRNavLink>
                    </li>
                    
                </ul>
                <div class="navbar-right">
                    <div class="search-bar">
                        <input type="text" placeholder="Buscar..."/>
                        <button type="submit">Buscar</button>
                        <a href="#" class="cart-icon"><i class="fas fa-shopping-cart"></i></a>
                     </div>
                    
                 </div>
            </nav>
        </div>
        ) 
}

export default NavBar1;