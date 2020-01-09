import React from 'react'
import logo from '../Imagenes/Logo.png'
import './Styles/Login.css'

class Login extends React.Component{
    render(){
        return( 
            <div className ="content">
                <div className ="login"> 
                    <img className="logo" src={logo}/>
                    <form className="formu">
                        <input className="texto" type="text" name="eMail" placeholder="Correo..." />
                        <input className="texto" type="password" name="password" placeholder="Contraseña..." />
                        
                    </form>
                    <div className="contbtn">
                        <button className ="btn">Entrar</button>
                    </div>
                    <div className ="contbtn">
                        <button className="btn">Registrase</button>
                    </div>
                </div>


            </div>

         );
    }


}


export default Login