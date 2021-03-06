import {Button, Container, Form, Image, Carousel, Card,CardGroup} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DogList from './DogList';
import ZipCode from './ZipCode';



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
    window.location.assign(`/zipCode/${zipCode}`)
    //create new dog in database
    //postDog()

    //reset form
    //setFormState(initialState)
}



//  useEffect will call the fetchDogDetail when this component mounts
 useEffect(() => {
   fetchzipCode();
 }, []);


    //render the dog details
    return (

        <Container>
          <div><Image className="d-block w-100" src="img/BannerImage.JPG"/> </div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupDog">
                <Form.Label>Pet Search</Form.Label>
                <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupZipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Zip Code" />
            </Form.Group>
            <Button type="submit" variant="primary" size="lg" >Find</Button>           
        </Form>
        <div className="d-grid gap-2">
            <Button type="submit" variant="primary" size="lg" > Pets Available for Adoption Nearby </Button>
         </div>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="img/BannerImage1.JPG"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Pupps And Paws</h3>
      <p>Let Us Help You -- Bring Home Your Furever Friend!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="img/BannerImage2.JPG"
      alt="Second Slide"
    />
    <Carousel.Caption>
    <h3>Pupps And Paws</h3>
    <p>Let Us Help You -- Bring Home Your Furever Friend!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/BannerImage3.JPG"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>Pupps And Paws</h3>
    <p>Let Us Help You -- Bring Home Your Furever Friend!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/BannerImage1.JPG"
      alt="Fourth slide"
    />
    <Carousel.Caption>
    <h3>Pupps And Paws</h3>
    <p>Let Us Help You -- Bring Home Your Furever Friend!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Checklist for New Adopters</Card.Title>
      <Card.Text>
		Help make the transition, as smooth as possible.
      </Card.Text>
       <Button variant="primary">LEARN MORE</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>COVID-19 Resources</Card.Title>
      <Card.Text>
        Get the latest on adoption processes, learn how
	local shelters and rescue groups are adapting
	and find out what you can do to help dogs and
	cats in need right now.
      </Card.Text>
       <Button variant="primary">LEARN MORE</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Pet Adoption FAQs</Card.Title>
      <Card.Text>
        Get answers to questions you haven't thought of.
      </Card.Text>
       <Button variant="primary">LEARN MORE</Button>
    </Card.Body>
  </Card>
</CardGroup>

</Container>

    );
}

export default DogSearchForm;