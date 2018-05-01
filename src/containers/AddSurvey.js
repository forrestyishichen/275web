import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./NewNote.css";


export default class AddSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  renderNotesList(notes) {
    return null;
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    );
  }

  renderNotesList(notes) {
    return [{}].concat(notes).map(
      (note, i) =>
      
          
              <h4>
                <b>{"\uFF0B"}</b> Create a new note
              </h4>

    );
  }

  handleNoteClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute("href"));
  }

  render() {
    return (
      <div className="AddSurvey">
        {this.renderNotesList()}
      </div>
    );
  }
}