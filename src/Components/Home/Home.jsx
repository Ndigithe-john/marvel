import React from "react";
import Characters from "../Nav/Characters";
import "../../App.css";
import Header from "./Header";
import Creators from "../Nav/Creators";
import Events from "../Nav/Events";
import Series from "../Nav/Series";
import Stories from "../Nav/Stories";
import Comics from "../Nav/Comics";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Footer />
      <div className="nav">
        {/* <Comics /> */}
        <Characters />
        <Creators />
        <Events />
        <Series />
        <Stories />
      </div>
    </>
  );
};

export default Home;
