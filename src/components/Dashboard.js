import React, { useState, useEffect} from 'react'
import Memes from './Memes';
import styles from "./dashboard.css"

function Dashboard({ userInfo }) {

    const [memes, setMemes]=useState([]);
    // console.log(userInfo)

    const [name, setName]= useState("");
    const[url, setUrl]= useState("");

    useEffect(() => {
        fetch('http://localhost:9292/memes')
        .then(response => response.json())
        .then(data => setMemes(data));
    },[]);

    // Add Meme
    function handleSubmit(event){
        event.preventDefault();
        const newMeme = { 
            name: name, 
            url: url, 
            user_id: userInfo.data.id 
        }
        console.log(newMeme)

        // POST data
        fetch("http://localhost:9292/memes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMeme)
        })
        .then(response => response.json())
        .then(data => updateState(data))
        .catch(error => console.error(error));


    }

    function updateState(data){
        // Update State
        setMemes([...memes, data]);
        // Set back to empty array
        setName('');
        setUrl('');
    }

    // PATCH data
    function updateMeme(meme_id, user_id){
        // console.log(meme_id)
        // console.log(user_id)
        if(user_id === userInfo.data.id){
            console.log("Possible")
            const newName = window.prompt('Kindly enter new MeMe name:');
            const newUrl = window.prompt('Kindly enter new Url name:');
            // console.log(newName);
            // console.log(newUrl);

            // Store updatedMeme
            let updatedMeme

            if (newName.length === 0){
                updatedMeme = {
                    url: newUrl,
                }
            }
            else if(newUrl.length === 0){
                updatedMeme = {
                    name: newName
                }
            }
            else {
                updatedMeme = {
                    name: newName,
                    url: newUrl
                }
            }

            console.log(updatedMeme)

            // PATCH 
            fetch(`http://localhost:9292/memes/${meme_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedMeme)
            })
            .then(response => response.json())
            .then(data => updateState(data))
            .catch(error => console.error(error));

        }
        else{
            console.log("Not Possible")
            alert('Sorry, the meme you are trying to update was created by another user');
        }
    }

    function deleteMeme(meme_id, user_id){
        // console.log(meme_id)
        // console.log(user_id)
        // console.log(userInfo.data)
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
        <Memes key={index} meme={meme} deleteMeme={deleteMeme} updateMeme={updateMeme} />
        ))}
    </div>
    <h1>Add your own Memes:</h1>
    <form className='form33' onSubmit={handleSubmit}>
        <label className='labelz' htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" onChange={(e) => setName(e.target.value)} />
        <label className='labelz' htmlFor="url">URL:</label>
        <input id='url' type='text' name="url" onChange={(e) => setUrl(e.target.value)} ></input>
        <button type="submit">Add Meme</button>
    </form>
    </>

  );
}

export default Dashboard