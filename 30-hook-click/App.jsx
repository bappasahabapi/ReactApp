import React, { useState } from 'react';

const App = () => {

    const state = useState();
    //This is hook functio;
    // const [current value, updated value]
    const[count,setCount] = useState(0);
    // let count = 1;
    // let count = 'bappa';
    const IncNum = () => {
        // count++;
        // console.log('clicked ' + count++);
        setCount(count + 1);
    };


    return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> Fuck* me</button>
            <button onClick={IncNum}> Fuck* me</button>
        </>
    );
};
export default App;