import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventDetails = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const url = `https://gateway.marvel.com:443/v1/public/events/${id}?apikey=77375a8933eaea208069fddf7b5de5b4`;
        const response = await axios.get(url);
        const eventData = response.data.data.results[0];

        setEventDetails(eventData);
      } catch (error) {
        console.log("Error Loading Event Details:", error);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  const { title, description } = eventDetails;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default EventDetails;
