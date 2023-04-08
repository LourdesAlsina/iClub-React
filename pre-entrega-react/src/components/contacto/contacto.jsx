import '../../style.css'
import NavBar1 from '../NavBar/navBar1';

function Contacto(){
    return (
        <div>
            <NavBar1 />
            <div class="login-card">
            <h1 class="logIn" data-aos="flip-up">Contactanos</h1>
            <form class="login-form" id="login-form">
                <input type="text" id="nombre" placeholder="Nombre"/>
                <input type="text" id="apellido" placeholder="Apellido"/>
                <input type="text" id="telefono" placeholder="Número de teléfono"/>
                <input type="text" id="email" placeholder="Email"/>
                <textarea class="fMensaje" name="" id="" cols="30" rows="10">Deje su mensaje...!</textarea>
                <button class="logButtom">Enviar</button>
            </form>
        </div>
        
        </div>
   
    )
}

export default Contacto