import React from 'react'
import '../css/dashboard.css'
// import { useState } from 'react'
// import { useContext } from 'react'
// import datacontext from '../context/dataContext';



export default function Dashboard() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // const context = useContext(datacontext);
  // const { addPersonal } = context;
  // const [personal, setPersonal] = useState({ name: "", dob: "", email: "", number: "", gender: "", occupation: "" });

  // const handleclick = (e) => {
  //   e.preventDefault();
  //   addPersonal(personal.name, personal.dob, personal.email, personal.number, personal.gender, personal.occupation);
  //   setPersonal({ name: "", dob: "", email: "", number: "", gender: "", occupation: "" });
  //   alert("Personal Details added");
  // }

  // const onChange = (e) => {
  //   setPersonal({ ...personal, [e.target.name]: e.target.value })
  // }



  return (
    <section>
      <div className='profile'>
        <div className='profile-info'>
          <p>Welcome, Pavan Kalamkar</p>
        </div>
      </div>

      <div className='form-container'>

        <div className='personal-form'>
          <p>Personal Details</p>
          <form>
            <div className='personal-info'>
              <input type='text' placeholder='Enter your name' id='name' name='name'></input>
              <input type='text' placeholder='Date of birth' id='dob' name='dob'></input>
              <input type='text' placeholder='Email' id='email' name='email'></input>
            </div>
            <div className='personal-info'>
              <input type='text' placeholder='Enter mobile number' id='number' name='number'></input>
              <input type='text' placeholder='Gender' id='gender' name='gender' ></input>
              <input type='text' placeholder='Occupation' id='occupation' name='occupation'></input>
            </div>
            <div className='form-button'>
              <button type='submit'><i className="fa-solid fa-check"></i></button>
              <button><i className="fa-solid fa-pen"></i></button>
              <button><i className="fa-solid fa-trash"></i></button>
            </div>
          </form>
        </div>

        <div className='personal-form'>
          <p>Most recent education</p>
          <div className='personal-info'>
            <input type='text' placeholder='School/Institution name'></input>
            <input type='text' placeholder='Field of study'></input>
            <input type='email' placeholder='Level of education, eg : BE'></input>
          </div>
          <div className='personal-info'>
            <input type='text' placeholder='Start date'></input>
            <input type='text' placeholder='End date'></input>
            <input type='text' placeholder='Country'></input>
          </div>
          <div className='form-button'>
            <button><i className="fa-solid fa-check"></i></button>
            <button><i className="fa-solid fa-pen"></i></button>
            <button><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>

        <div className='personal-form'>
          <p>Most recent experience</p>
          <div className='personal-info'>
            <input type='text' placeholder='Most recent employer'></input>
            <input type='text' placeholder='Most recent job title'></input>
            <input type='email' placeholder='Start date'></input>
          </div>
          <div className='personal-info'>
            <input type='text' placeholder='End date'></input>
            <input type='text' placeholder='Location'></input>
            <input type='text' placeholder='Location type , eg : onsite'></input>
          </div>
          <div className='form-button'>
            <button><i className="fa-solid fa-check"></i></button>
            <button><i className="fa-solid fa-pen"></i></button>
            <button><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>

        <div className='personal-form'>
          <p>Skills</p>
          <div className='personal-info'>
            <input className="skill-input" type='text' placeholder='Enter skills, eg : Data analytics'></input>
          </div>
          <div className='form-button'>
            <button><i className="fa-solid fa-check"></i></button>
            <button><i className="fa-solid fa-pen"></i></button>
            <button><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>

        <div className='personal-form'>
          <p>Objective</p>
          <div className='personal-info'>
            <input type='text' className='skill-input' placeholder='Enter your objectives'></input>
          </div>
          <div className='form-button'>
            <button><i className="fa-solid fa-check"></i></button>
            <button><i className="fa-solid fa-pen"></i></button>
            <button><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <button onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i></button>
      </div>
    </section>
  )
}
