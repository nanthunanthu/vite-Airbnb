import React from "react";
import image from "../Images/airbnb1.png";
import img1 from "../Images/Group 77.png"; 

export default function Header() {
  return (
    <>
      <div className="Head">
        <img className="logo" src={image} alt="logo of Airbnb" />
      </div>
      <div className="group">
        <img src={img1} alt="Group image" />
      </div>
      <h1 className="text">Online Experiences</h1>
      <p className="text1">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>
    </>
  );
}
