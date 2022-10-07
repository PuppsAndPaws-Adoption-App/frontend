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
                return (<Col xs={12} sm={6} lg={4}><Dog key={dog.id} dog={dog}/>
                    </Col>)
            })}
            </Row>
    </Container>
        </div>
        :
        <p>loading</p>
    );
}

export default DogList;