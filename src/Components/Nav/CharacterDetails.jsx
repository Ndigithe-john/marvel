import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterDetails = ({ characterId }) => {
  const [character, setCharacter] = useState("");
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=77375a8933eaea208069fddf7b5de5b4`
        );
        const data = response.data;
        const characterData = data?.data?.results[0];
        setCharacter(characterData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchComics = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=77375a8933eaea208069fddf7b5de5b4`
        );
        const data = response.data;
        const comicsData = data?.data?.results;
        setComics(comicsData);
      } catch (error) {
        console.log(error);
      }
    };

    if (characterId) {
      fetchCharacterDetails();
      fetchComics();
    }
  }, [characterId]);

  if (!character) {
    return null;
  }

  const { name, thumbnail, description } = character;

  return (
    <div className="character-details-modal">
      <h4>Character Details</h4>
      <h5>Name: {name}</h5>
      <p>Description: {description || "N/A"}</p>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />

      <div className="comics">
        <h4>Comics</h4>
        {comics.map((comic) => {
          const { id, title } = comic;
          return <p key={id}>{title}</p>;
        })}
      </div>
    </div>
  );
};

export default CharacterDetails;
