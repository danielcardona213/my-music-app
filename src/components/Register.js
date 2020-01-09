
import React from 'react'
import '../components/Styles/Register.css'



class Register extends React.Component{
    render(){
        return(
        <body>
            <div className = "Container">
                <div className="elements">
                    
                    <h2>My music App</h2>
                    <h3>Registrarse</h3>

                </div>
                <form className ="form">
                    <input className ="texto" type ="text" name ="email" placeholder="Correo..." />
                    <input className ="texto" type ="password" name ="pass" placeholder ="Contraseña..."/>
                    <br/>
                    <button className="btn">Registrarse</button>
                </form>

                <button className="btn">Regresar</button>

            </div>

        </body>
        
        );
    }
}

export default Register