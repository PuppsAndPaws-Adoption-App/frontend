import {Button, Container, Form} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DogList from './DogList'

function DogSearchForm() {
  
 //get the id from the Route parameters
 let { zipCode } = useParams();
 //maps through list of dogs, creating a component for each

 //dogState will store the specific dog we fetch
 const [dogState, setDogState] = useState([]);

 //function to fetch dogs and store in state
 const fetchzipCode = async (zipCode) => {
   try {
     console.log(zipCode);
     const response = await fetch(`http://localhost:3000/zipCode/${zipCode}`, {
       method: "GET",
     });
     const responseJSON = await response.json();
     //updates state with dog list
     console.log(responseJSON);
     setDogState(responseJSON);
   } catch (err) {
     console.log(err);
   }
 };
   //handle form submission
   const handleSubmit = (e) => {
    //prevent the page from refreshing on submit
    e.preventDefault()
    const zipcodeInput=document.getElementById("formGroupZipCode")
    const zipCode=zipcodeInput.value
    fetchzipCode(zipCode)
    
    //create new dog in database
    //postDog()

    //reset form
    //setFormState(initialState)
}



 //useEffect will call the fetchDogDetail when this component mounts
//  useEffect(() => {
//    fetchzipCode();
//  }, [zipCode]);


    //render the sauce details
    return (
        <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupDog">
                <Form.Label>Animal</Form.Label>
                <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupZipCode">
                <Form.Label>ZipCode</Form.Label>
                <Form.Control type="text" placeholder="ZipCode" />
            </Form.Group>
            <Button type="submit">submit</Button>
        </Form>
        <DogList dogs={dogState}/>
        </Container>

    );
}

export default DogSearchForm;