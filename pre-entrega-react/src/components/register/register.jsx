import '../../style.css'
import NavBar1 from '../NavBar/navBar1';
import { NavLink as RRNavLink, useParams } from 'react-router-dom'


function Register() {
    
    return (
        <div>
        <NavBar1 />
        <div class="login-card">
            <h1 class="logIn" data-aos="flip-up">Login</h1>
            <h2>Ingresá tus datos</h2>
            <form class="login-form" id="login-form">
                <input type="text" id="nombre" placeholder="Nombre"/>
                <input type="text" id="apellido" placeholder="Apellido"/>
                <input type="text" id="telefono" placeholder="Número de teléfono"/>
                <input type="text" id="email" placeholder="Email"/>
                <input type="password" id="contraseña" placeholder="Contraseña"/>  
                <a href="registro.html">Registrarse</a>
                <a href="#">¿Olvidaste tu contraseña?</a>
                <button class="logButtom">LOGIN</button>
            </form>
        </div>

            <ul id="mistake"></ul>
        </div>
    )
}

export default Register