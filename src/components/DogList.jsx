import React from 'react';
import Dog from './Dog';


function DogList({dogs}) {
    //maps through list of dogs, creating a component for each
    return (
        dogs
        ? 
        <div>

            {dogs.map((dog)=>{
                return <Dog key={dog.id} dog={dog}/>
            })}
        </div>
        :
        <p>loading</p>
    );
}

export default DogList;