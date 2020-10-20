import React, { useState } from 'react';

const Idecrement = () => {

    const [num, setNum ] = useState(0);
    const incNum = () =>
    {
        setNum(num+1);
    }
    const decNum = () =>
    {
        if(num > 0){
            setNum(num-1);
        }else{
            alert('sorry 😢 you have reached your limit');
            setNum(0);
        }
       
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1> {num} </h1>
                    <div className='btn_div'>
                        <button onClick={incNum}> Incre </button>
                        <button onClick={decNum}> Dece</button>
                        
                    </div>
                </div>
            </div>
        </>

    )

};
export default Idecrement;