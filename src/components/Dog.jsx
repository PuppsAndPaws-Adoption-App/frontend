import React from 'react';
import {Link} from 'react-router-dom';

function Dog(props) {
  
    //delete dog from db
    const clickDelete = async () => {
        await fetch(`http://localhost:3000/dogs/${props.dog.id}`, {
            method: 'DELETE'
        })
    }



    //render the dog details
    return (
        <div className='Dog'>
        <h2 id="item-name">{props.dog.name}</h2>
        <img className="item-img" src={props.dog.image} alt={props.dog.name} />
        <Link to={`/dogs/${props.dog.id}`}>View</Link>
        <button id="delete-btn" onClick={clickDelete}>Delete</button>

        </div>
    );
}

export default Dog;