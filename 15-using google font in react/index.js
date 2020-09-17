
import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const name = "bappa";
const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/seed/picsum/250/300";
const img3 = "https://picsum.photos/seed/picsum/300/300";
const link = 'https://www.facebook.com/profile.php?id=100002688295492&ref=bookmarks';


ReactDOM.render(
  <>
    <h1>  --------- Importing CSS files in react----- </h1>
    <h1 className="heading"> My name is {name} </h1>
    <div className="img_div">
      <img src={img1} alt="randomImage" />
      <img src={img2} alt="randomImage" />
      <a href={link} target="_bappa">
        <img src={img3} alt="randomImage" />
      </a>
    </div>
  </>,
  document.getElementById("root")

);