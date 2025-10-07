import React from "react";
import { useRoutes, Link } from "react-router-dom";
import Locations from "./pages/Locations";
import LocationEvents from "./pages/LocationEvents";
import "./App.css";

const App = () => {
  // Sets up routes based on the files you have
  let element = useRoutes([
    {
      path: "/",
      element: <Locations />,
    },
    {
      path: "/events/:location_id",
      element: <LocationEvents />,
    },
  ]);

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.png" alt="logo" />
            <h1>Fantasy Event Finder</h1>
          </div>
          <div className="header-right">
            <Link to="/">
              <button className="homeBtn">Home</button>
            </Link>
          </div>
        </div>
      </header>

      {element}
    </div>
  );
};

export default App;
