// create a react app from scratch.
// add one h1 element ex: your name 
// add one p element in it with CurrentDate
// add one p element in it with CurrentTime


import React from "react";
import ReactDOM from "react-dom";

const name ="bappa";
const CurrentDate = new Date().toLocaleDateString();
const CurrentTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>  Hello , My name is {name} </h1>
  <p>  CurrentDate is =  {CurrentDate} </p>
  <p>  CurrentTime is =  {CurrentTime} </p>
  </>,
  document.getElementById("root")

);