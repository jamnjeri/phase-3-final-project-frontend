import React from 'react'
import styles from './login.css'

function Login() {
  return (
    <div className='container'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Sign In</h5>
                <form className='formsss'>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                    </div>
                    {/* <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="rememberCheck" />
                        <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login