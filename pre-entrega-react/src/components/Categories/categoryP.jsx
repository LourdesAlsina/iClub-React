import '../../style.css'
import NavBar1 from '../NavBar/navBar1';
import { NavLink as RRNavLink, useParams } from 'react-router-dom' 


function CategoryP() {  
    return (
    <div className='categoriaPadre'>
        <NavBar1 />
        <div class="categorias">
            <div class="categoria">
               <RRNavLink exact to="/categoryP/phones" className='navLink' activeClassName='active'>
                 Celulares
               </RRNavLink>
            </div>
            <div class="categoria">
                <RRNavLink exact to="/categoryP/fundas" className='navLink' activeClassName='active'>
                 Fundas
               </RRNavLink>
            </div>
            <div class="categoria">
                <RRNavLink exact to="/categoryP/accesorios" className='navLink' activeClassName='active'>
                 Accesorios
               </RRNavLink>
            </div>
             <div class="categoria">
                <RRNavLink exact to="/categoryP/usados" className='navLink' activeClassName='active'>
                 Usados
               </RRNavLink>
            </div>
        </div>
     </div>
    )
}

export default CategoryP;