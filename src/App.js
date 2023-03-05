import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useRef,useState, useEffect } from 'react';
import Home from './views/Home';
import Signin from './views/Signin';
import Signup from './views/Signup';

function App() {
  
  //API Url
  const url = "http://localhost:9292/memes" 

  // Signed in state
  const [isLoggedin, setIsLoggedin] = useState(false);
  const isLoggedInRef = useRef(isLoggedin);
  const [user, setUser] = useState();

  // State to store all memes
  const [data, setData] = useState([])

    useEffect(() => {
    isLoggedInRef.current = isLoggedin;
  }, [isLoggedin]);


  // Handle change of logged in state
  function onLogin(message){
    // console.log(message)
    setUser(message)
    setIsLoggedin(true)
    // console.log(isLoggedin)
    isLoggedInRef.current = true;
    setIsLoggedin(true)
    // console.log(isLoggedin)
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home onlogin={isLoggedInRef.current} userInfo={user} /> } />
        <Route path='sign-in' element={ <Signin isLoggedin={onLogin} /> } />
        <Route path='sign-up' element={ <Signup isLoggedin={onLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
