import React from "react";
import { useNavigate } from "react-router-dom";

const ComicsCard = ({ props }) => {
  const navigate = useNavigate();

  const handleComicClick = (comicId) => {
    navigate(`/${comicId}`);
  };

  return (
    <>
      {props.map((comic) => (
        <div
          className="card"
          key={comic.id}
          onClick={() => handleComicClick(comic.id)}
        >
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt=""
          />
          <div className="title">
            <h5>{comic.title}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default ComicsCard;
