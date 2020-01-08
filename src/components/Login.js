import React from 'react'
import logo from '../Imagenes/Logo.png'
import './Styles/Login.css'

class Login extends React.Component{
    render(){
        return( 
            <div>
                <div>
                    <img src={logo}/>
                    <form>
                        <input type="text" name="eMail" placeholder="Correo..." />
                        <input type="text" name="eMail" placeholder="Contraseña..." />
                        <input type="Submit" name="send" value="Entrar" />
                    
                    </form>


                </div>
                    <button>Registrase</button>


            </div>

         );
    }


}


export default Login