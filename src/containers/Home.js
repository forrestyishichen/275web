import React, { Component } from 'react'
import { Jumbotron, Carousel, Button } from "react-bootstrap";
import Pic1 from './4.jpeg';
import Pic2 from './5.jpeg';
import Pic3 from './6.jpeg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
      <div>
      <Jumbotron>
        <h1>Welcome to CMPE275-SurveyApe!</h1>
        <p>
          <Button bsStyle="primary" href="
           /allGsurvey">Take a Survey</Button>
        </p>
      </Jumbotron>
      </div>
      <div>
      <Carousel>
        <Carousel.Item>
          <img className="img" alt="900x500" src={Pic1} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" alt="900x500" src={Pic2} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" alt="900x500" src={Pic3} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
    );
  }
}

export default Home;
