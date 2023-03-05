import React from 'react'
import LOGO from "../assests/spongebob.png"
import styles from "./navbar.css"
// import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <img src={LOGO} className="logo" />
        <h1 className='title'>MeMe Club</h1> 
        <a href='./'>Home</a>
        <a href='./sign-in'>Sign-In</a>
        <a href='./sign-up'>Sign-Up</a>
    </div>
  )
}

export default Navbar