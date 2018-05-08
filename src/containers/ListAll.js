import React, { Component } from "react";
import { ListGroupItem, PageHeader, ListGroup } from "react-bootstrap";
import "./ListAll.css";

var $ = require('jquery');

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      surveys: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const surveys = await this.getSurveys();
      console.log(surveys);
      this.setState({ surveys });
      console.log(this.state.surveys);
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  getSurveys() {
    var id = window.localStorage.getItem('id');
    $.get('http://localhost:8080/account/' + id + '/allsurveys',
        function (data) {
          console.log(data);
          return data;
    }).fail(function() {
      alert("Failed");
    });
  }

  renderSurveysList(surveys) {
    return null;

  // return [{}].concat(surveys).map(
  //   (survey, i) =>
  //     i !== 0
  //       ? <ListGroupItem
  //           key={i}
  //           // href={`/survey/${i}`}
  //           // onClick={this.handleSurveyClick}
  //           header={survey.id}
  //         >
  //           // {"Created: " + new Date(survey.createdAt).toLocaleString()}
  //         </ListGroupItem>
  //       : <ListGroupItem
  //           key="new"
  //           href="/surveys/new"
  //           onClick={this.handleSurveyClick}
  //         >
  //           <h4>
  //             <b>{"\uFF0B"}</b> Create a new survey
  //           </h4>
  //         </ListGroupItem>
  // );
}

// handleSurveyClick = event => {
//   event.preventDefault();
//   this.props.history.push(event.currentTarget.getAttribute("href"));
// }

  renderLander() {
    return (
      <div className="lander">
        <h1>CMPE275-SurveyApe</h1>
        <p>A simple survey taking app</p>
      </div>
    );
  }

  renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderSurveysList(this.state.surveys)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    );
  }
}