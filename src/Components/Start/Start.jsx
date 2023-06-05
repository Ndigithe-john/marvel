import React from "react";
import { Link } from "react-router-dom";
import "./start.css";

const Start = () => {
  return (
    <>
      <div className="backGround-img">
        <div className="startpage">
          <h1>LETS GO!!!</h1>
          <button className="signinbtn">Sign in</button>
        </div>
        <div className="introduction">
          <h1 className="welcome">Welcome to:</h1>
          <h1 className="studio">STUDIOS</h1>
          <h3>
            Ready to watch Your best Movies, Comics,Tv Shows and many more....
          </h3>
          <h3> Enter Your User name and Click the Get started button below</h3>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Input your user name"
            className="inputField"
          />
          <Link to="/Home" className="button">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Start;
