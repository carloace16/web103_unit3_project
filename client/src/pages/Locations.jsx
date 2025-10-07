import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchLocations } from "../services/api";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      const data = await fetchLocations();
      setLocations(data);
    };
    getLocations();
  }, []);

  return (
    <div className="container">
      <h2>Explore the Realms</h2>
      <div className="grid">
        {locations &&
          locations.map((location) => (
            <Link to={`/events/${location.id}`} key={location.id}>
              <article>
                <img
                  src={location.image}
                  alt={location.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />

                {/* This new div wraps the text content */}
                <div className="card-body">
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                </div>
              </article>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Locations;
