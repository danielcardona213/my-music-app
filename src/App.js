import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home/Home';

import { register } from './serviceWorker';



function App() {
  return (
   
   <div className="App"> 
    <div className="Home">
      <Home/>

    </div>
      
    {/*
      <div className="Login">
        <Login />
      </div>
    */}

    {/*
      <div className="registro">
        <Register  /> 
      </div>
     */}
     
     <div className ="Home">

       
     </div>

    </div>
    



  );
}

export default App;
