import React from "react";
import dogAPI from "./dogAPI";
import Dog from "./Dog";

class RandomDogWithBreed extends React.Component {
  constructor() {
    super();
    this.state = {
      imageURL: ""
    };
  }

  getRandomDog = () => {
    const { breed } = this.props;
    this.setState({ imageURL: "" });
    dogAPI.getRandomDogWithBreed(breed).then(response => {
      this.setState({ imageURL: response.data.message });
    });
  };

  componentDidMount() {
    this.getRandomDog();
  }

  render() {
    const { imageURL } = this.state;
    const { breed } = this.props;
    return (
      <div>
        <h2> Random {breed} </h2>
        <Dog imageURL={imageURL} />
        <button onClick={this.getRandomDog}> another one </button>
      </div>
    );
  }
}

export default RandomDogWithBreed;
