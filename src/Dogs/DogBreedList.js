import React from "react";
import { Link } from "react-router-dom";

const DogBreedList = ({ breeds }) => (
  <div>
    <ul>
      {breeds.map(breed => (
        <li key={breed}>
          <Link to={`/dogs/breeds/${breed}`}> {breed} </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default DogBreedList;
