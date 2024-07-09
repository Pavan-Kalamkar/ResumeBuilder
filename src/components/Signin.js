import React from 'react'
import '../css/register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signin = (props) => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //To do API call
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //Save the authtoken and redirect
      localStorage.setItem('authtoken', json.authtoken);
      // props.showAlert("Logged in Successfully", "success");
      alert("Signed in successfully !");
      navigate("/dashboard");
    }
    else {
      // props.showAlert("Invalid Details", "danger");
      alert("Invalid Credentials");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="register-container">
        <form className="register" onSubmit={handleSubmit}>
          <h2>Signin</h2>
          <input type='email' placeholder='Email' id="email" name="email" value={credentials.email}
            onChange={onChange} required></input>
          <input type='password' placeholder='Password' id="password" name="password" value={credentials.password}
            onChange={onChange} required></input>
          <button type='submit'>SignIn</button>
          <p>Don't have an account ? <Link className='link' to='/register'>Signup</Link></p>
        </form>
      </div>
    </>
  )
}

export default Signin;
