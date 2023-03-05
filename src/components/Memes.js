import React from 'react'
import styles from "./dashboard.css"

function Memes({ meme, deleteMeme }) {

    function handleDelete(){
        deleteMeme(meme.id, meme.user_id)
    }

  return (
    <div className='card'>
        <img className='card-img' src={meme.url} alt={meme.name} />
        <div className="card-body">
            <h2 className="card-title">{meme.name}</h2>
            <h4 className='card-name'>Added By: {meme.user.full_name}</h4>
            <button onClick={handleDelete}>Delete</button>
            <button>Update</button>
        </div>
    </div>
  )
}

export default Memes