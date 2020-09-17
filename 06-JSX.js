
import React from 'react';
import ReactDOM from 'react-dom';

// JSX = java script extention/ javascript xml  ... this is goga bappa ||| html gulokei react e JSX bola hoye thake   
//  <h1> hello mad boy bappa!!! </h1>  -->jsx expression in react

ReactDOM.render(<h1> JSX expression in react </h1>,
  document.getElementById('root')
);

// if we want to do it in pure java script form

var h1 = document.createElement('h1');
h1.innerHTML = "using inner js goga";
document.getElementById("root").appendChild(h1);

