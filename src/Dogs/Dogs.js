import React from "react";
import { Route, Switch } from "react-router-dom";

import RandomDog from "./RandomDog";
import RandomDogWithBreed from "./RandomDogWithBreed";

import DogBreeds from "./DogBreeds";

class App extends React.Component {
  renderRandomDogWithBreed = props => {
    const { breed } = props.match.params;
    return <RandomDogWithBreed breed={breed} />;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/dogs/random" component={RandomDog} />
        <Route exact path="/dogs/breeds" component={DogBreeds} />
        <Route exact path="/dogs/breeds/:breed" component={DogBreeds} />
      </Switch>
    );
  }
}

export default App;
