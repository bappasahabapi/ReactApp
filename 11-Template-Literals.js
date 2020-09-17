import React from 'react';
import ReactDOM from 'react-dom';

const fname = 'bappa';
const lname = "saha";


ReactDOM.render(  
  <>
  <h1> --------------Template Literals in react--------</h1>

 <h2> using Template Literals : full name is {`${fname} ${lname}`}</h2>
 <h2> {` using Template Literals : full name is ${fname} ${lname}`}</h2>

  <h3> My first name is {fname} </h3>
  <h3> My last name is {lname} </h3>
  <h2> My full name is {fname} {lname} </h2>
  <h2> My full name is {fname + lname} //using concatation </h2>
  <h2> My full name is {fname +" " +lname}   //using concatation </h2>


  </>,
  document.getElementById('root')  
);

/* Template Literals use korar jonno amake
back tag `` use korte hbee
console.log{`my name is ${fname}`};
*/