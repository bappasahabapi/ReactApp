import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import './index.css';


ReactDOM.render(
  <>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orginal Series"
      sname="Dark"
      link="https://www.netflix.com/bd/title/80990668?source=35"
    />
    <Card 
      imgsrc="https://wallpapercave.com/wp/thq0mll.jpg"
      title="A Netflix Orginal Series"
      sname="Extreamly Violate"
      link="https://www.netflix.com/bd/title/80990668?source=35"
    />
    <Card
    sname="Stranger Things"
    imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
      title="A Netflix Orginal Series"   
      link="https://www.netflix.com/bd/title/80990668?source=35"/>
  </>,
  document.getElementById("root")
);
