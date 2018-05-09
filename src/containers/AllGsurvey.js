import React, { Component } from "react";
import { ListGroupItem, PageHeader, ListGroup } from "react-bootstrap";
import "./AllGsurvey.css";

var $ = require('jquery');

export default class AllGsurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      surveys: []
    };
    this.getSurveys = this.getSurveys.bind(this);
  }

  async componentDidMount() {
    try {
      await this.getSurveys();
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  getSurveys() {
    var that = this;
    $.get('http://localhost:8080/survey/surveyType/GENERAL',
        function (data) {
          that.setState({ surveys: data });
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
              href={`/surveys/:${survey.id}`}
              onClick={this.handleSurveyClick}
              header={'Survey:' + survey.id}
            >
              {"Survey Type: " + survey.surveyType}
            </ListGroupItem>
          : <PageHeader>A simple survey taking app</PageHeader>
    );
  }

handleSurveyClick = event => {
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute("href"));
}

  renderSurveys() {
    return (
      <div className="notes">
        <ListGroup>
          {!this.state.isLoading && this.renderSurveysList(this.state.surveys)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.renderSurveys()}
      </div>
    );
  }
}