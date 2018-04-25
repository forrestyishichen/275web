import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Main from './Main'
import Headernav from './Headernav'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
    <div className= "App Site">
      <div className="Site-content">
        <div>
        <Headernav />
      </div>
        <div className="main">
          <Main />
        </div>
      </div>
       <Footer />
    </div>
    );
  }
}

export default App;
