import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gateway.marvel.com:443/v1/public/comics?limit=50&apikey=77375a8933eaea208069fddf7b5de5b4"
        );
        setComics(response.data.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="marvel">
        <h4>COMICS</h4>
        <div className="lists">
          {comics.map((comic) => {
            const { id, name, thumbnail, title } = comic;
            return (
              <Link to={`/comics/${id}`} key={id} className="comic-link">
                <div className="img">
                  <img
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={name}
                  />
                  <h5>Title: {title}</h5>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Comics;
