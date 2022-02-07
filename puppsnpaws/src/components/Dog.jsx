import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Dog(props) {
    //everything about one sauce
    
    //create a state to track the likes
   // const [likes, setLikes]=useState(props.sauce.likes)

    //create event handler to update likes
   // const clickLikes = () => {
   //     const newLikes = likes +1
   //     setLikes(newLikes)
    //    putLikes(newLikes)
   // }

    //update the likes attribute of this sauce in the database
    // const putLikes = async (newLikes) => {
    //     await fetch(`http://localhost:3000/sauces/${props.sauce.id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             likes: newLikes
    //         })
    //     })
    // }

    //delete dog from db
    const clickDelete = async () => {
        await fetch(`http://localhost:3000/dogs/${props.dog.id}`, {
            method: 'DELETE'
        })
    }

    //render the sauce details
    return (
        <div className='Dog'>
        <h2 id="item-name">{props.dog.name}</h2>
        <img className="item-img" src={props.dog.image} alt={props.dog.name} />
        {/* <h3>Likes: <span id="like-counter">{likes}</span></h3> */}
        <Link to={`/dogs/${props.dog.id}`}>View</Link>
        {/* <button id="like-btn" onClick={clickLikes}>Like</button> */}
        <button id="delete-btn" onClick={clickDelete}>Delete</button>
        <a href={'/edit-dog/'+props.dog.id} className="edit-dog-btn">Edit this dog</a>
        </div>
    );
}

export default Dog;