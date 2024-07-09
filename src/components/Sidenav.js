import React from 'react';
import '../css/sidenav.css';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Sidenav = () => {

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    navigate("/signin");
  }

  return (
    <>
        <div className="sidenav">
               <div className="sidenav-cont">
               {!localStorage.getItem("authtoken")?
               <div className="links">
                  <Link className="Link" to="/"><i className="fa-solid fa-house"></i> Home</Link>
                  <Link className="Link" to="/signin"><i className="fa-solid fa-user"></i> Signin</Link>
                  <Link className="Link" to="/register"><i className="fa-solid fa-user"></i> Register</Link>
                  <Link className="Link"><i className="fa-solid fa-circle-exclamation"></i>About</Link>
                  {/* <Link className="Link"><i className="fa-solid fa-bell"></i> Notifications</Link> */}
                </div>
                :
                <div className="buttons">
                  <Link className="Link" to='/dashboard'><i className="fa-regular fa-circle-user"></i>Dashboard</Link>
                  <Link className="Link" to='/template'><i className="fa-regular fa-file"></i>Templates</Link>
                  <button  onClick={handleLogout} ><i className="fa-solid fa-right-from-bracket fa-flip-horizontal"></i> Logout</button>
                </div>
                }
               </div>
        </div>
    </>
  )
}


export default Sidenav;