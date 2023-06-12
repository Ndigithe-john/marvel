import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import "../../App.css";
import CharacterDetails from "./CharacterDetails";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const apiURL = `https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=77375a8933eaea208069fddf7b5de5b4`;

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

  const fetchCharacterDetails = async (id) => {
    try {
      setSelectedCharacterId(id);
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=77375a8933eaea208069fddf7b5de5b4`
      );
      const data = response.data;
      const characterDetails = data?.data?.results[0];
      setSelectedCharacter(characterDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="marvel">
      <h4>CHARACTERS</h4>

      <div className="lists">
        {characters.map((character) => {
          const { id, name, thumbnail } = character;

          return (
            <div className="img" key={id}>
              <Link to={`/Home/characters/${id}`}>
                <img
                  className="glitch-image"
                  src={`${thumbnail.path}.${thumbnail.extension}`}
                  alt={name}
                  onClick={() => fetchCharacterDetails(id)}
                />
              </Link>

              <div className="character-info">
                <h5>Name: {name}</h5>
              </div>
            </div>
          );
        })}
      </div>

      <CharacterDetails
        character={selectedCharacter}
        characterId={selectedCharacterId}
      />
      <Outlet />
    </div>
  );
};

export default Characters;
