import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEventsByLocation } from "../services/api";

const Events = () => {
  const [events, setEvents] = useState([]);
  const { location_id } = useParams();

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEventsByLocation(location_id);
      setEvents(data);
    };
    getEvents();
  }, [location_id]);

  return (
    <div className="container">
      <h2>Events in this Realm</h2>
      {events && events.length > 0 ? (
        events.map((event) => (
          <article key={event.id}>
            <hgroup>
              <h4>{event.name}</h4>
              <h5>Date: {new Date(event.date).toLocaleString()}</h5>
            </hgroup>
            <p>{event.description}</p>
          </article>
        ))
      ) : (
        <p>No events found for this location.</p>
      )}
    </div>
  );
};

export default Events;
