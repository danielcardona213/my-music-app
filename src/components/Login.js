import React from 'react';
import './Styles/Login.css';

class Login extends React.Component{
    render(){
        return( 
            
                <div className ="content">
                    <div className ="login"> 
                       
                        
                            <h1>My music</h1>
                            <h3>Login</h3>
                        
                        <form className="formL">
                            
                            <input className="textoL" type="text" name="eMail" placeholder="Correo..." />
                            <input className="textoL" type="password" name="password" placeholder="Contraseña..." />
                            

                            <div className="contbtnL">
                            <button className ="btnL">Entrar</button>
                            </div>
                        </form>

                        <div className ="regiContL">
                            <article>Si no tiéne cuenta, puedes Registrarte</article>
                            <div className ="contbtnL">
                                <button className="btnL">Registrase</button>
                            </div>
                        </div>
                    </div>


                </div>
         );
    }


}


export default Login;