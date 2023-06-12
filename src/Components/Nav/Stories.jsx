import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import { Link } from "react-router-dom";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const apiURL = `https://gateway.marvel.com:443/v1/public/stories?limit=60&apikey=77375a8933eaea208069fddf7b5de5b4`;

  const getStories = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data.data.results;
      setStories(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getStories();
  }, []);
  return (
    <>
      <div className=" stories">
        <h4>Creators</h4>
        <div className="lists ">
          {stories.map((storie) => {
            const { id, title } = storie;
            return (
              <div className="creator" key={id}>
                <h5>Title:{title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Stories;

// import React from "react";

// const Stories = () => {
//   return <div>Stories</div>;
// };

// export default Stories;
