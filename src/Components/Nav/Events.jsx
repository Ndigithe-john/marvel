import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios";
import "../../App.css";
import EventDetails from "./EventsDetails";

const Events = () => {
  const [events, setEvents] = useState([]);
  const url = `https://gateway.marvel.com:443/v1/public/events?offset=60&apikey=77375a8933eaea208069fddf7b5de5b4`;

  const getEvents = async () => {
    try {
      const resource = await axios.get(url);
      const data = resource.data.data.results;

      setEvents(data);
    } catch (error) {
      console.log("Error Loading data:", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <div className="marvel">
        <h4>EVENTS</h4>
        <div className="lists">
          {events.map((eventss) => {
            const { id, thumbnail, fullName } = eventss;

            // Create a dynamic URL for each event using its ID
            const eventDetailsUrl = `/Home/events/${id}`;

            return (
              <Link to={eventDetailsUrl} key={id}>
                <div className="img">
                  <img
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={fullName}
                  />
                  <h4>Title: {fullName}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
