import React, { useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import Homebody from '../components/Homebody'
import Navbar from '../components/Navbar'

function Home( { onlogin, userInfo } ) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }


  return (
    <div>
        <Navbar />
        <>
        {onlogin? (<Dashboard userInfo={userInfo} />) : (<Homebody />)}
        </>
        <Footer />
    </div>
  )
}

export default Home