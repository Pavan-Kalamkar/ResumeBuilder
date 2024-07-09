import { useState } from "react";
import DataContext from "./noteContext";


const DataState = (props) => {

    const host = "http://localhost:5000";

    //Personal Details section
    const personalInitial = [];
    const [personal, setPersonal] = useState(personalInitial);

    const getPersonal = async () => {
    //To do API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authtoken')
        },
    });
    const json = await response.json();
    setPersonal(json);
    }


 //Add a new note in the Database//
  const addPersonal = async (name, dob, email, number, gender, occupation) => {
    //To do API call
    const response = await fetch(`${host}/api/personal/addpersonal/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authtoken')
      },
      body: JSON.stringify({name, dob, email, number, gender, occupation }),
    });
    const personaldata = await response.json();
    setPersonal(personal.concat(personaldata));
  }

return (
    <DataContext.Provider value = {{ personal, addPersonal, getPersonal}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataState;