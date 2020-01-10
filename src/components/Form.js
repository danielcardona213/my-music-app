import React from 'react';
import './Styles/Form.css'



class Form extends React.Component{
    render(){
        return(
            
            <form className="formF">
                <input className="textoF" type="text" name="eMail" placeholder="Correo..." />
                <input className="textoF" type="password" name="password" placeholder="Contraseña..." />
                        
                            
                <div className="contbtnF">
                <button className ="btnF">Entrar</button>
                </div>

            </form>
        );
    }
}

export default Form;