import React, { useState } from 'react';
import styles from './login.css'
import {useNavigate} from 'react-router-dom';

function Login({isLoggedin}) {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleEmailChange=(event)=>{
        setEmail(event.target.value);
    }

    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        const credentials = { email, password };

        fetch("https://jamila-meme-generator.onrender.com/auth/login", {
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
            isLoggedin(data)
            navigate('/'); 
        }
        // If not display error message
        else{
            console.log("Nope")
        }
        
    }

  return (
    <div className='container'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Sign In</h5>
                <form className='formsss' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={handlePasswordChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login