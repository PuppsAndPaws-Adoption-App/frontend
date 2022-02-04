import React, {useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

function SauceDetail() {
    //get the id from the Route parameters
    let { id } = useParams();

    //sauceState will store the specific sauce we fetch
    const [sauceState, setSauceState]=useState({})

    //function to fetch sauces and store in state
    const fetchSauceDetail = async () =>{
        try{
            console.log(id)
            const response = await fetch(`http://localhost:3000/sauces/${id}`, {
            method: 'GET'
            });
            const responseJSON = await response.json()
            //updates state with sauce list
            console.log(responseJSON)
            setSauceState(responseJSON.sauce)
        } catch(err) {
        console.log(err)
        }
    }
    
    //useEffect will call the fetchSauceDetail when this component mounts
    useEffect(() => {
        fetchSauceDetail()
    },[id])

    return (
        sauceState
        ? 
        <div className='SauceDetail'>
            <h2 id="item-name">{sauceState.name}</h2>
            <img className="item-img" src={sauceState.image} alt={sauceState.name} />
            <h3>Likes: <span id="like-counter">{sauceState.likes}</span></h3>
            <Link to="/">Back</Link>
        </div>
        :
        <p>loading..</p>

    );
}

export default SauceDetail;