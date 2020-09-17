import React from "react";
import Card from './Cards';
import Sdata from './Sdata';
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = 'netflix';
// const favSeries = 'amazon';
const FavS = () => {

    if (favSeries == 'netflix') {
       return <Netflix/>;
    } else {
       return <Amazon/>
    }
}


const App = () => (
    <>

        <h1 className='heading_style'> List of top Netflix  & Amazon Series in 2020 ranked by bappa </h1>
        <FavS/>

    </>
);
export default App;
