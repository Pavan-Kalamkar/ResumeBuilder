import React from 'react'
import '../css/register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";




const Register = (props) => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    //To do API call
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json()
    console.log(json);
    
    if (json.success) {
      //Save the authtoken and redirect
      localStorage.setItem('authtoken', json.authtoken);
      navigate("/");
      // props.showAlert("Account Created Successfully", "success");
      alert("Account Created Successfully !");

    }
    else {
      // props.showAlert("Invalid Credentials", "danger");
      alert("Ivalid Credentials");
    }
  }


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register">
            <h2>Signup</h2>
            <input type='text' placeholder='Name' name='name' id="name" onChange={onChange} required></input>
            <input type='email' placeholder='Email' name='email' id="email" onChange={onChange} required></input>
            <input type='password' placeholder='Password' name='password' id="password" onChange={onChange} required></input>
            <button type='submit'>Signup</button>
            <p>Already have an account ? <Link className='link' to='/signin'>Signin</Link></p>
        </form>
      </div>
    </>
  )
}


export default Register;