import React from "react";
import Video from "../Avengers/Avengers.mp4";
import "../../App.css";

const About = () => {
  return (
    <div>
      <video
        className="video"
        src={Video}
        fluid={false}
        autoPlay={true}
        muted={true}
        loop={true}
      />
    </div>
  );
};

export default About;
