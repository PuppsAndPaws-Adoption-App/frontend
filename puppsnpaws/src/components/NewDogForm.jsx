import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import DogList from './DogList'


function NewDogForm(props) {

    //set an initial state for the form
    const initialState = {name:"", image:"", zipCode: "", gender:"", age: ""}

    //store the dog form in state
    const [formState, setFormState]= useState(initialState)

     //dogState will store the specific dog we fetch
    const [dogState, setDogState] = useState([]);

    //update name state when an input changes
    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
        console.log(formState)
    }

    //handle form submission
    const handleSubmit = (e) => {
        //prevent the page from refreshing on submit
        e.preventDefault()

        //create new dog in database
        postDog()


        //reset form
        setFormState(initialState)
    }

    //create new dog in database
    const postDog = async () => {
        const res=await fetch(`http://localhost:3000/new-dog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formState.name,
                image: formState.image,
                zipCode: formState.zipCode
            })
        })
        console.log(res)
        window.location.assign('/dogs')

    }


    return (
        <form onSubmit={handleSubmit}>
            <p> List Your Pet For Adoption</p>
            <label htmlFor="name">Dog Name:</label>
            <input type="text" id="name" name="name" required onChange={handleChange}/><br/>
            <label htmlFor="zipCode">  Zip Code  :</label>
            <input type="text" id="zipCode" name="zipCode" required onChange={handleChange}/><br/>
            <label htmlFor="image">Image URL:</label>
            <input type="url" id="image" name="image" required onChange={handleChange}/><br/>
            <button type="submit">List A New Pet</button>
        </form>
        
    );
}

export default NewDogForm;