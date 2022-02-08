import React, {useState, useEffect} from 'react';
import Dog from './Dog';
import {useParams } from "react-router-dom";

function zipCode() {

    //get the id from the Route parameters
        let { zipCode } = useParams();
    //maps through list of dogs, creating a component for each

    //dogState will store the specific dog we fetch
    const [dogState, setDogState]=useState({})

    //function to fetch dogs and store in state
    const fetchzipCode = async () =>{
        try{
            console.log(id)
            const response = await fetch(`http://localhost:3000/zipCode/${zipCode}`, {
            method: 'GET'
            });
            const responseJSON = await response.json()
            //updates state with dog list
            console.log(responseJSON)
            setDogState(responseJSON.dog)
        } catch(err) {
        console.log(err)
        }
    }
    
    //useEffect will call the fetchDogDetail when this component mounts
    useEffect(() => {
        fetchzipCode()
    },[zipCode])    




    return (
        <div>
            {dogState.map((dog)=>{
                return <Dog key={dog.zipCode} dog={dog}/>
            })}
        </div>
    );
}

export default zipCode;