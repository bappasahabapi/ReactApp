import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById("root")
);


// Spread Operator in ReactJS(...)
// this  operator is used for array concatation .


// this is first use case 

// const fullname = ['bappa','saha'];
// const address = ['hallpara','thakurgaon'];
// const biodata = [ 2015,...fullname,26,"male",...address];

// console.log(fullname);
// console.log(biodata);


// This is second use case 

// var shotterGame =['call of duty','far cry','pubgi'];

// var racingGame =['fuck boy ','car','spreed'];
// var games =[...shotterGame,...racingGame];

// console.log(games);

// This is third  use case of array concatation.

// var shotterGame =['call of duty','far cry','pubgi'];
// var [first,...remaining] = shotterGame;
// console.log(first);
// console.log(remaining);


// this is the best way of arry discharginng

// const fullName = {
//   fname: 'bappa',
//   lname: 'saha',
// };

// const biodata = {
//   id: 1,
//   ...fullName, // objict add koira
//   age: 26,
//   gender: 'male',
// };

// console.log(biodata);