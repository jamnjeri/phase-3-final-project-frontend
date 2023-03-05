import React from 'react'
import styles from "./dashboard.css"

function Memes({ meme }) {
  return (
    <div className='card'>
        <img className='card-img' src={meme.url} alt={meme.name} />
        <div className="card-body">
            <h2 className="card-title">{meme.name}</h2>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default Memes