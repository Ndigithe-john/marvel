import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const apiURL = `https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=77375a8933eaea208069fddf7b5de5b4
  `;

  const getCharacters = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const charactersData = data?.data?.results;
      setCharacters(charactersData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="characters">
      <h4></h4>

      <div className="characters-list">
        {characters.map((character) => {
          const { id, name, thumbnail } = character;

          return (
            <div className="character" key={id}>
              <Link to={`/characters${id}`}>
                <img
                  className="glitch-image"
                  src={`${thumbnail.path}.${thumbnail.extension}`}
                  alt={name}
                />
              </Link>
              <div className="character-info">
                <h5>Name: {name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
