import React, {useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

function DogDetail() {
    //get the id from the Route parameters
    let { id } = useParams();

    //dogState will store the specific dog we fetch
    const [dogState, setDogState]=useState({})

    //function to fetch dogs and store in state
    const fetchDogDetail = async () =>{
        try{
            console.log(id)
            const response = await fetch(`http://localhost:3000/dogs/${id}`, {
            method: 'GET'
            });
            const responseJSON = await response.json()
            //updates state with sauce list
            console.log(responseJSON)
            setDogState(responseJSON.dog)
        } catch(err) {
        console.log(err)
        }
    }
    
    //useEffect will call the fetchDogDetail when this component mounts
    useEffect(() => {
        fetchDogDetail()
    },[id])

    return (
        dogState
        ? 
        <div className='DogDetail'>
            <h2 id="item-name">{dogState.name}</h2>
            <img className="item-img" src={dogState.image} alt={dogState.name} />
            {/* <h3>Likes: <span id="like-counter">{dogState.likes}</span></h3> */}
            <Link to="/">Back</Link>
        </div>
        :
        <p>loading..</p>

    );
}

export default DogDetail;