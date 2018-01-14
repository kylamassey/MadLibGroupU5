import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1> Dog Pictures </h1>
    Click on <Link to="/dogs/random">Random Dog</Link> to see a random dog
    picture or on <Link to="/dogs/breeds">Dog Breeds</Link> to see a random
    picture by breed.
  </div>
);

export default Home;
