import React, { useState, useEffect} from 'react'
import Memes from './Memes';
import styles from "./dashboard.css"

function Dashboard({ userInfo }) {

    const [memes, setMemes]=useState([]);
    console.log(userInfo)

    useEffect(() => {
        fetch('http://localhost:9292/memes')
        .then(response => response.json())
        .then(data => setMemes(data));
    },[]);

  return (
    <>
    <h1>Welcome </h1>
    <div className="card-container">
        {memes.map((meme, index) => (
        <Memes key={index} meme={meme} />
        ))}
    </div>
    </>

  );
}

export default Dashboard