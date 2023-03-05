import React from 'react'
import styles from "./homebody.css"
import { Link } from 'react-router-dom'

function Homebody() {
  return (
    <div className='container2'>
      <div className="centered-card">
        <div className="card">
            <div className="card-body">
              <h2 className="card-title">Welcome to Meme Club</h2>
              <p className="card-text">Your one stop shop for all things memes .</p>
              <div className="carousel-container">
                <div className="carousel">
                  <img
                    src="https://clideo.com/files/content/twitter-meme-maker-1.png"
                    alt="First Slide"
                    width="600" height="200"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNL-DHD5uniXRZzQpuzDBxifm3Tzitg0hAA&usqp=CAU"
                    alt="Second Slide"
                    width="800" height="400"
                  />
                  <img
                    src="https://www.asiamediajournal.com/wp-content/uploads/2020/12/Happy-New-Year-2021-Memes.jpg"
                    alt="Third Slide"
                    width="800" height="400"
                  />
                </div>
                <p className="card-text2">Create an account and enjoy creating your own meme library.</p>
                <div className="carousel-buttons">
                  <button type="button" className="btn btn-primary">
                    <Link className='link1' to="sign-in">Sign In</Link>
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <Link className='link1' to="sign-up">Register</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Homebody