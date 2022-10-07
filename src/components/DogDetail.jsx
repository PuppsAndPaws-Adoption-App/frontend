import React, {useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';


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
            //updates state with dog list
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
<Card style={{ width: '38rem' }}>
  <Card.Img variant="top" src={dogState.image} alt={dogState.name} />
  <Card.Body>
    <Card.Title><h1>{dogState.name}</h1></Card.Title>
    <Card.Text>
      Breed: {dogState.breed}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Age:{dogState.age}</ListGroupItem>
    <ListGroupItem>Sex: {dogState.gender}</ListGroupItem>
    <ListGroupItem>Weight: {dogState.size}</ListGroupItem>
    <ListGroupItem>{dogState.description}</ListGroupItem>
    <ListGroupItem> {dogState.zipCode}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Link to="/">Back</Link>
  </Card.Body>
</Card>

 
        :
        <p>loading..</p>

    );
}

export default DogDetail;