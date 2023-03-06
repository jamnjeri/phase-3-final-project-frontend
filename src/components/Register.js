import React, { useState } from 'react'
import styles from './register.css';
import {useNavigate} from 'react-router-dom';

function Register({isLoggedin}) {

  const navigate = useNavigate();

  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');


  const handleFullNameEntry=(event)=>{
    setFullName(event.target.value);
  }

  const handleEmailEntry=(event)=>{
    setEmail(event.target.value);
  }

  const handlePasswordEntry=(event)=>{
      setPassword(event.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();

    if( full_name.length === 0 || email.length === 0 || password.length === 0){
      alert('Sorry, fill in all the required fields');
    }
    else{
      const credentials = { full_name, email, password };

      fetch("https://jamila-meme-generator.onrender.com/auth/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials)
      })
      .then(response => response.json())
      .then(data => checkstatus(data))
      .catch(error => console.error(error));
    }

    function checkstatus(data){
      // If log in is successful, set Log in state
      // console.log(data)
      if(data.message === "SUCCESS"){
        isLoggedin(data);
        navigate('/'); 
      }
      // If not display error message
      else{
        console.log("Nope");
      }
    }

  }


  return (
    <div className="register-container">
        <div className="card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" onChange={handleFullNameEntry} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleEmailEntry} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handlePasswordEntry} />

            <button type="submit">Register</button>
        </form>
        </div>
    </div>
  )
}

export default Register