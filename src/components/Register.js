
import React from 'react';
import '../components/Styles/Register.css';
import Logo from '../Imagenes/Logo.png';
import Form from './Form';


class Register extends React.Component{
    render(){
        return(
        

            <div className = "Container">
                <div className="Registro">
                    
                        <img src={Logo} className="logo"/>
                        <h2>My music</h2>
                        <h3>Registrarse</h3>

                    <Form />
                    
                    <div className="btnRregis">
                        <button className="btn">Regresar</button>
                    </div>
                </div>
            </div>
       
        
        );
    }
}

export default Register