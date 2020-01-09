import React from 'react'
import logo from '../Imagenes/Logo.png'
import './Styles/Login.css'

class Login extends React.Component{
    render(){
        return( 
            <body>
                <div className ="content">
                    <div className ="login"> 
                        <img className="logo" src={logo}/>
                        
                            <h1>My music</h1>
                            <h3>Login</h3>
                        
                        <form className="formu">
                            
                            <input className="texto" type="text" name="eMail" placeholder="Correo..." />
                            <input className="texto" type="password" name="password" placeholder="Contraseña..." />
                            

                            <div className="contbtn">
                            <button className ="btn">Entrar</button>
                            </div>
                        </form>
                     
                        <div className ="contbtn">
                            <button className="btn">Registrase</button>
                        </div>
                    </div>


                </div>
            </body>
         );
    }


}


export default Login