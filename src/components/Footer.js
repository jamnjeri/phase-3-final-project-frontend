import React from 'react'
import styles from "./footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/jamnjeri/phase-3-final-project-frontend"><i className="fab fa-github"></i></a>
        </div>
        <div>
            <p>&copy; 2023 MeMeClub.io</p>
        </div>
    </div>
  )
}

export default Footer