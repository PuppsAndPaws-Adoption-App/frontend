import React from 'react';
import {Link} from 'react-router-dom';
import {Card,CardGroup,Button,Container} from 'react-bootstrap';

function Dog(props) {
  
    //delete dog from db
    const clickDelete = async () => {
        await fetch(`http://localhost:3000/dogs/${props.dog.id}`, {
            method: 'DELETE'
        })
    }



    //render the dog details
    return (
        
        <Container>

        <Card style={{ width: '38rem' }}>
            <Card.Header className="Card.Header" bg="dark" variant= "dark" text="light"><h1>{props.dog.name}</h1></Card.Header>
            <Card.Img variant="top" src={props.dog.image} alt={props.dog.name} />
   
                <Card.Body>
                <Link to={`/dogs/${props.dog.id}`}>View</Link>   
                
                 
                </Card.Body>
                     <button id="delete-btn" onClick={clickDelete}>Delete</button>  
            <Card.Footer className="Card.Footer" bg="white" variant= "white" text="light"> </Card.Footer>

        </Card>



    </Container>






    );
}

export default Dog;