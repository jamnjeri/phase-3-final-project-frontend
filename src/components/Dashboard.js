import React, { useState, useEffect} from 'react'
import Memes from './Memes';
import styles from "./dashboard.css"

function Dashboard({ userInfo }) {

    const [memes, setMemes]=useState([]);
    // console.log(userInfo)

    useEffect(() => {
        fetch('http://localhost:9292/memes')
        .then(response => response.json())
        .then(data => setMemes(data));
    },[]);


    function addMeme(){

    }

    function updateMeme(){
        
    }

    function deleteMeme(meme_id, user_id){
        console.log(meme_id)
        console.log(user_id)
        console.log(userInfo.data)
        if(user_id === userInfo.data.id){
            console.log("Possible")
            // DELETE
            fetch(`http://localhost:9292/memes/${meme_id}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(() => {
                // Remove the deleted name from the state
                setMemes(memes.filter(meme => meme.id !== meme_id))
            })
            .catch(error => console.log(error));
        }
        else{
            console.log("Not Possible")
            alert('Sorry, the meme you are trying to delete was created by another user');
        }
    }

  return (
    <>
    <h1>Welcome To The Meme Library: </h1>
    <div className="card-container">
        {memes.map((meme, index) => (
        <Memes key={index} meme={meme} deleteMeme={deleteMeme} />
        ))}
    </div>
    <h1>Add your own Memes:</h1>
    </>

  );
}

export default Dashboard