import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import { Link } from "react-router-dom";

const Creators = () => {
  const [creators, setCreators] = useState([]);
  const apiURL = `https://gateway.marvel.com:443/v1/public/creators?limit=50&apikey=77375a8933eaea208069fddf7b5de5b4`;

  const getCreators = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data.data.results;
      setCreators(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getCreators();
  }, []);
  return (
    <>
      <div className="marvel">
        <h4>CREATORS</h4>
        <div className="lists">
          {creators.map((creator) => {
            const { id, name, thumbnail, title } = creator;
            return (
              <div className="img" key={id}>
                <img
                  src={`${thumbnail.path}.${thumbnail.extension} `}
                  alt={name}
                />
                <h5>Title:{title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Creators;
