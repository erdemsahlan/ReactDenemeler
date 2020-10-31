import React, {Component} from 'react';
import Navbar from "./Components/Navbar"
import User from "./Components/User"
import './App.css';


function App() {
  return (
    <div className="container">
       <Navbar title="User App"/>
       <User
       name="mustafa"
       salary="5000"
       department="bilişim"
       />
       <User
       name="erdo"
       salary="6500"
       department="bilişim"
       />
    </div>
  );
}

export default App;
