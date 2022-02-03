import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
           <Link className='link' to='/'><h3>View Sauces</h3></Link>
           <Link className='link'to='/new'><h3>Add New Sauce</h3></Link>
           {props.sauces.map((sauce) => {
               return <Link className='link'key={sauce.id} to={`/sauces/${sauce.id}`}>{sauce.name}</Link>
           })}
        </div>
    );
}

export default Header;