import Register from './components/Register.js';
import Navbar from './components/Navbar.js'
import Sidenav from './components/Sidenav.js';
import './css/App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signin from './components/Signin.js';
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.js';




function App() {
  return (
    <>
  <Router>
        <div className="App">
          <Navbar/>
          <div className="home-container">
            <div className="home-sidenav">
              <Sidenav/>
            </div>
            <div className="home-login">
            <Routes>
            <Route path="/dashboard" element = {<Dashboard/>}></Route>
            <Route path="/register" element = {<Register/>}></Route>
            <Route path="/signin" element = {<Signin/>}></Route>
            <Route path='/' element =  {<Home/>}></Route>
            </Routes>
            </div>
          </div>
        </div>
    </Router>
    </>
  );
}

export default App;
