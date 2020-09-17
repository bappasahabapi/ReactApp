import React from 'react';
import Sdata from './Sdata';
import Card  from './Cards';

 const Amazon = () =>{
    return (
        <Card
            key={Sdata[6].id}
            imgsrc={Sdata[6].imgsrc}
            title={Sdata[6].title}
            sname={Sdata[6].sname}
            link={Sdata[6].link}
        />
    );

  }
export default Amazon;