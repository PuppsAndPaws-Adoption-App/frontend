import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import DogList from './DogList'
import {Form,Container,Button, Card} from 'react-bootstrap';

function NewDogForm(props) {

    //set an initial state for the form
    const initialState = {name:"", image:"", zipCode: "",breed: "", gender:"", age: "", size:"", description: ""}

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
                zipCode: formState.zipCode,
                breed: formState.breed,
                gender: formState.gender,
                age: formState.age,
                size: formState.size,
                description: formState.description,

            })
        })
        console.log(res)
        window.location.assign('/dogs')

    }


    return (
        <Container>
        <Card style={{ width: '30rem' }}>
        <Card.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Pet Name</Form.Label>
                <Form.Control type="text" placeholder="Name" required onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="url" placeholder="image" required onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="breed">
                <Form.Label>Pet Breed</Form.Label>
                <Form.Control type="text" placeholder="Breed" required onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Pet Gender</Form.Label>
                <Form.Control type="text" placeholder="Gender"required onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
                <Form.Label>Pet Age</Form.Label>
                <Form.Control type="text" placeholder="Age" required onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="size">
                <Form.Label>Pet Size</Form.Label>
                <Form.Control type="text" placeholder="Size" required onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Pet Description</Form.Label>
                <Form.Control type="text" placeholder="Description" required onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="zipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Zip Code" required onChange={handleChange}/>
            </Form.Group>
            <Button type="submit">Register</Button>
        </Form>
        </Card.Body>
        </Card>
        </Container>
        
    );
}

export default NewDogForm;