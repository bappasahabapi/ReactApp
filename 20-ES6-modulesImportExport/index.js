import React from 'react';
import ReactDOM from 'react-dom';
import *  as bapi from './App';
// import  youtuber from './App';
// import  myfavt,{fvtpro} from './App';
// import myfavt, { fvtpro,first,second } from './App';

ReactDOM.render(
  <>
    <ol>
      <li>bappa </li>
      {/* <li> {youtuber} </li> */}
      <li> {bapi.default} </li>
      <li> {bapi.fvtpro} </li>
      <li> {bapi.first()} </li>
      <li> {bapi.second()} </li> 
    </ol>
  </>,
  document.getElementById("root")
);
{/* <ol>
      <li>bappa </li>
      {/* <li> {youtuber} </li> */}
      
    //   <li> {fvtpro} </li>
    //   <li> {first()} </li>
    //   <li> {second()} </li> 
    // </ol> */}