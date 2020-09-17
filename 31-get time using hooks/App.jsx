import React, { useState } from 'react';

const App = () => {

    let newTime = new Date().toLocaleTimeString();
    const [curtime,setcurtime]= useState(newTime);

    const UpdateTime = () =>
    {
         newTime = new Date().toLocaleTimeString();
         setcurtime(newTime);
    }

    return (
        <>
            <h1> {curtime} </h1>
            <button onClick = {UpdateTime}> get time </button>
        </>
    );
}
export default App;
