import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Login from '../components/Login'

function Signin({isLoggedin}) {
  return (
    <div>
        <Navbar />
        <>
        <Login isLoggedin={isLoggedin} />
        </>
        <Footer />
    </div>
  )
}

export default Signin