import React, { useState } from 'react';

const App = () =>{

    const purple = '#8e44ad';
    const [bg, setbg] = useState(purple);
    const [name,setName] = useState('click me ');   
    
    const bgChange = () =>{
        // console.log(" ক্লিক করলে কাজ করে  ");      
        let newBg ='#34495e';
        setbg(newBg);
        setName('double click to back 😠');            
    };
    const bgBack = () =>{
             
        
        setbg(purple);
        setName('click me 😄');            
    };

    return(
        <>
            <div style={{backgroundColor: bg }}> 
            <button onClick = {bgChange} onDoubleClick = {bgBack} > {name} </button>
            </div>
        </>
    );
};
export default App;