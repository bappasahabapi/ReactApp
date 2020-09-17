import React from 'react';

function App() {
    //new date(year,month,day,hours,minutes,seconds,milliseconds)

    let currDate = new Date(2020, 8, 30, 11);
    // let currDate = new Date();
    currDate = currDate.getHours();
    let greeting = '';
    const cssStyle = {};

    if (currDate >= 1 && currDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    }
    else if (currDate >= 12 && currDate < 19) {
        greeting = 'Good Afternoon';
        cssStyle.color = 'orange';
    }
    else {
        greeting = 'Good Night';
        cssStyle.color = 'black';

    }
    return (
        <>
            <div>
                <h1>Hello Bapi, <span style={cssStyle}>  {greeting} </span> </h1>
            </div>
        </>
    );

}

export default App;