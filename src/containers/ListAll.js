import React, { Component } from "react";
import { ListGroupItem, PageHeader, ListGroup } from "react-bootstrap";
import "./ListAll.css";

var $ = require('jquery');

export default class ListAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      surveys: []
    };
    this.getSurveys = this.getSurveys.bind(this);
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      await this.getSurveys();
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  getSurveys() {
    var id = window.localStorage.getItem('userid');
    var that = this;
    $.get('http://localhost:8080/account/' + id + '/allsurveys',
        function (data) {
          that.setState({ surveys: data });
          console.log(id);
    }).fail(function() {
      alert("Failed");
    });
  }

  renderSurveysList(surveys) {
    return [{}].concat(surveys).map(
      (survey, i) =>
        i !== 0
          ? <ListGroupItem
              key={survey.id}
              href={`/mysurveys/:${survey.id}`}
              onClick={this.handleSurveyClick}
              header={'Survey:' + survey.id}
            >
              {"Survey Type: " + survey.surveyType}
            </ListGroupItem>
          : <ListGroupItem
              key="new"
              href="/surveys/new"
              onClick={this.handleSurveyClick}
            >
              <h4>
                <b>{"\uFF0B"}</b> Create a new survey
              </h4>
            </ListGroupItem>
    );
  }

handleSurveyClick = event => {
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute("href"));
}

  renderLander() {
    return (
      <div className="lander">
        <h1>CMPE275-SurveyApe</h1>
        <p>A simple survey taking app</p>
      </div>
    );
  }

  renderSurveys() {
    return (
      <div className="notes">
        <PageHeader>Your Survey</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderSurveysList(this.state.surveys)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderSurveys() : this.renderLander()}
      </div>
    );
  }
}
