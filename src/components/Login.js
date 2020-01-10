import React from 'react';
import './Styles/Login.css';
import Form from '../components/Form';
import Logo from '../Imagenes/Logo.png'

class Login extends React.Component{
    render(){
        return( 
            
                <div className ="content">
                    <div className ="login"> 
                       
                            <img src ={Logo}  className="logo"/>
                            <h1>My music</h1>
                            <h3>Login</h3>
                        
                        <Form />
                        

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