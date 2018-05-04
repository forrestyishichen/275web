import React, { Component } from 'react'
import { Jumbotron, Carousel, Button } from "react-bootstrap";

export default class Success extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1>Congratulations!!</h1>
        <p>
          Your acccount has been successful created! Please customize your own survey and invite your friends!
        </p>
        <p>
          <Button bsStyle="primary" href="
           /roster">Take a Survey</Button>
          <Button bsStyle="primary" href="
           /survey/new">Create your own Survey</Button>
        </p>
      </Jumbotron>
      </div>
    );
  }
}