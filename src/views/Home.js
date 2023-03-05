import React from 'react'
import Footer from '../components/Footer'
import Homebody from '../components/Homebody'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar />
        <>
        <Homebody />
        </>
        <Footer />
    </div>
  )
}

export default Home