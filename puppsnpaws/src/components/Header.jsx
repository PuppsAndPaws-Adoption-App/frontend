import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
           <Link className='link' to='/'><h3>View Dogs</h3></Link>
           <Link className='link'to='/new'><h3>Add New Dog</h3></Link>
           {props.dog.map((dog) => {
               return <Link className='link'key={dog.id} to={`/dogs/${dog.id}`}>{dog.name}</Link>
           })}
        </div>
    );
}

export default Header;