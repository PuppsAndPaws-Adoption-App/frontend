import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dog from './Dog';


function DogList({dogs}) {
    //maps through list of dogs, creating a component for each
    return (
        dogs
        ? 
        <div>
    <Container>
        <Row className="dog-grid">
            {dogs.map((dog)=>{
                return (<Dog key={dog.id} dog={dog}/> 
                    )
            })}
            </Row>
    </Container>
        </div>
        :
        <p>loading</p>
    );
}

export default DogList;