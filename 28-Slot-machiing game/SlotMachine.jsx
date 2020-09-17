import React from 'react';


const SlotM =(props) =>{
    // let x = '🥚';
    // let y = '🥚';
    // let z = '🍵';
    // let z = '🥚';

    // let x =props.x;
    // let y =props.y;
    // let z =props.z;

    // object-destructing 
    let {x,y,z} = props;


    if( (x===y) && (y===z)){
        return(
            <>
                <div className="slot_inner">
                <h1> {x} {y} {z} </h1>
                <h1> This is matching bapi :) </h1>
                <hr></hr>

                </div> 
            </>
        );
    }else{
        return(
            <>
                <div className="slot_inner">
                <h1> {x} {y} {z} </h1>
                <h1> This is not matching goga :( </h1>
                <hr></hr>

                </div> 
            </>
        );
    }
}

export default SlotM;