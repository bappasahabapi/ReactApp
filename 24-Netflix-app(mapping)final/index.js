import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';

// console.log(Sdata[0].sname);

// define the ncard function
// function ncard(val)
// {
//   console.log(val);
//   return(

//   );
// }

ReactDOM.render(
  <>

    <h1 className='heading_style'> List of top Netflix Series in 2020 ranked by bappa </h1>

    {/* call the function ncard  */}
    {/* {Sdata.map(ncard)} */}
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}

  </>,
  document.getElementById("root")
);
