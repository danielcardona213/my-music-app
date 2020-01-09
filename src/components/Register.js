
import React from 'react'
import '../components/Styles/Register.css'



class Register extends React.Component{
    render(){
        return(
        

            <div className = "Container">
                <div className="Registro">

                    
                    <div className="elements">
                        
                        <h2>My music</h2>
                        <h3>Registrarse</h3>

                    </div>
                    <form className ="form">
                        <input className ="texto" type ="text" name ="email" placeholder="Correo..." />
                        <input className ="texto" type ="password" name ="pass" placeholder ="Contraseña..."/>
                        <br/>
                        <button className="btn">Registrarse</button>
                    </form>
                    <div className="contBtnR">
                        <button className="btn">Regresar</button>
                    </div>
                </div>
            </div>
       
        
        );
    }
}

export default Register