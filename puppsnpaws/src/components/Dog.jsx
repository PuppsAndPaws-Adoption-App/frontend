import React from 'react';
import {Link} from 'react-router-dom';

function Dog(props) {
  


    //render the dog details
    return (
        <div className='Dog'>
        <h2 id="item-name">{props.dog.name}</h2>
        <img className="item-img" src={props.dog.image} alt={props.dog.name} />
        <Link to={`/dogs/${props.dog.id}`}>View</Link>
        </div>
    );
}

export default Dog;