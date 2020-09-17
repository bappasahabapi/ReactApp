import React from "react";
import Card from './Cards';
import Sdata from './Sdata';


const App =() => (
  <>

    <h1 className='heading_style'> List of top Netflix Series in 2020 ranked by bappa </h1>

    
    {Sdata.map((val,index) => {
      console.log(index);
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}

  </>
);
export default App;
