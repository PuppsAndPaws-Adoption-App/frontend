import React from 'react';
import Dog from './Dog';

function DogList({dogs}) {
    //maps through list of dogs, creating a component for each
    return (
        <div>
            {dogs.map((dog)=>{
                return <Dog key={dog.id} dog={dog}/>
            })}
        </div>
    );
}

export default DogList;