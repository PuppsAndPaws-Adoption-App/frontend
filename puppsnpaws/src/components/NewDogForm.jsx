import React, { useState } from 'react';

function NewDogForm(props) {

    //set an initial state for the form
    const initialState = {name:"", image:""}

    //store the dog form in state
    const [formState, setFormState]= useState(initialState)

    //update name state when an input changes
    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
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
        await fetch(`http://localhost:3000/new-dog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formState.name,
                image: formState.image
            })
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Dog Name:</label>
            <input type="text" id="name" name="name" required onChange={handleChange}/><br/>
            <label htmlFor="image">Image URL:</label>
            <input type="url" id="image" name="image" required onChange={handleChange}/><br/>
            <button type="submit">Submit a new dog</button>
        </form>
    );
}

export default NewDogForm;