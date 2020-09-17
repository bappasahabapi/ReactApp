import React from 'react';
import ReactDOM from 'react-dom';

const fname = 'bappa saha';

ReactDOM.render(  
  <>
  <h1> --------------JSX expression in react--------</h1>
  <h3> My first name is fname </h3>
  <h3> My first name is {fname} </h3>
  <p> My lucky number is 7 </p>
  <p> My lucky number is 4+3 </p>
  <p> My lucky number is = {4+3} </p>
  <p> The Mathe.random() is = {Math.random()} </p>
  <p> The squre root of 2 is  = {Math.sqrt(2)} </p>

  </>,
  document.getElementById('root')  
);

/* we use inside the { }, in Expression not Statement*/