import React from "react";
import dogAPI from "./dogAPI";
import Dog from "./Dog";

class RandomDog extends React.Component {
  constructor() {
    super();
    this.state = {
      imageURL: ""
    };
  }

  getRandomDog = () => {
    this.setState({ imageURL: "" });

    dogAPI.getRandomDog().then(response => {
      this.setState({ imageURL: response.data.message });
    });
  };

  componentDidMount() {
    this.getRandomDog();
  }

  // Every time this component is rendered by another component
  // the below method will be called.
  // We need this so that every time the user clicks on "Random Dog"
  // in the navbar, a new dog will be rendered
  componentWillReceiveProps() {
    this.getRandomDog();
  }

  render() {
    const { imageURL } = this.state;
    return (
      <div>
        <h2> Random Dog </h2>
        <Dog imageURL={imageURL} />
        <button onClick={this.getRandomDog}> another one </button>
      </div>
    );
  }
}

export default RandomDog;
