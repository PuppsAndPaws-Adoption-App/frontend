import React from 'react';
import Sauce from './Sauce';

function SauceList({sauces}) {
    //maps through list of sauces, creating a component for each
    return (
        <div>
            {sauces.map((sauce)=>{
                return <Sauce key={sauce.id} sauce={sauce}/>
            })}
        </div>
    );
}

export default SauceList;