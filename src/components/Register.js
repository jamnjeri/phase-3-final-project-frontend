import React from 'react'
import styles from './register.css';

function Register() {
  return (
    <div className="register-container">
        <div className="card">
        <h2>Register</h2>
        <form>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Register</button>
        </form>
        </div>
    </div>
  )
}

export default Register