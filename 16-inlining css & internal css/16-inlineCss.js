
import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const name = "bappa";
const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/seed/picsum/250/300";
const img3 = "https://picsum.photos/seed/picsum/300/300";
const link = 'https://www.facebook.com/profile.php?id=100002688295492&ref=bookmarks';

// .heading{
//   color: #fa9191;
//   text-align: center;
//   text-transform:  capitalize;
//   font-weight: bold;
//   text-shadow: 0px 2px 4px #ffe9c5;
//   margin: 70px 0px;
//   font-family: 'Josefin Sans', sans-serif;
// }

const heading = {
  color: '#fa9191',
  textTransform: 'capitalize',
  key: 'value',
  textAlign : 'center'
}

ReactDOM.render(
  <>
    <h1>  --------- Internal and Inline Css  in react----- </h1>

    <h1 style={{
      color: '#fa9191',
      textTransform: 'capitalize',
      key: 'value',
      textAlign : 'center'
    }} > My name is {name} </h1>

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