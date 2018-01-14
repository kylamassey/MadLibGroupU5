import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import DogBreedList from "./DogBreedList";
import Dog from "./Dog";

import dogAPI from "./dogAPI";

class DogBreeds extends React.Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      randomImageURL: ""
    };
  }

  getDogBreeds = () => {
    dogAPI.getDogBreeds().then(response => {
      this.setState({ breeds: response.data.message });
    });
  };

  getRandomDog = breed => {
    this.setState({ randomImageURL: "" });
    dogAPI.getRandomDogWithBreed(breed).then(response => {
      this.setState({ randomImageURL: response.data.message });
    });
  };

  componentWillReceiveProps(nextProps) {
    const { breed } = nextProps.match.params;
    if (breed) {
      this.getRandomDog(breed);
    }
  }

  componentDidMount() {
    const { breed } = this.props.match.params;
    if (breed) {
      this.getRandomDog(breed);
    } else {
      this.getDogBreeds();
    }
  }

  render() {
    const { randomImageURL, breeds } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/dogs/breeds"
          render={() => <DogBreedList breeds={breeds} />}
        />
        <Route
          path="/dogs/breeds/:breed"
          render={() => <Dog imageURL={randomImageURL} />}
        />
      </Switch>
    );
  }
}

export default DogBreeds;
