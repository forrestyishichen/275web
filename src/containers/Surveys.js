import React, { Component } from "react";
import { Label, Button, ListGroupItem, PageHeader, ListGroup } from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import DatePicker from 'react-datepicker';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Checkbox, Radio, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./NewNote.css";
import Pic1 from './1.png';
import Pic2 from './2.png';
import Pic3 from './3.png';

var $ = require('jquery');

export default class AllGsurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      surveyId: "",
      startTime: moment(),
      endTime: moment(),
      questions: []
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
    $.get('http://localhost:8080/survey', {
      surveyId: this.props.match.params.id.substring(1)},
      function (data) {
        that.setState({ surveyId: data.id });
        that.setState({ startTime: data.startTime });
        that.setState({ endTime: data.endTime });
        that.setState({ questions: data.questions });
        console.log(that.state.questions);
    }).fail(function() {
      alert("Failed");
    });
  }

  renderSurveysList(questions) {
    return [{}].concat(questions).map(
      (question, i) =>
      i !== 0
          ? <ListGroupItem
              key={i}
              header={question.question}
            >
            {this.renderSwitch(question.questionType)}
            </ListGroupItem>
          : <p>Pleare answer the following questions!</p>
    );
  }

  renderSwitch(param) {
    switch(param) {
      case 'MULTIPLE_CHOICE_TEXT':
        return (<FormGroup controlId="select1">
            <FormControl componentClass="select" placeholder="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </FormControl>
          </FormGroup>);
      case 'STAR_RATING':
        return (<FormGroup controlID="rating">
            <StarRatings
              rating={this.state.rating}
              starRatedColor="red"
              changeRating={this.changeRating}
              numberOfStars={5}
              starDimension="40px"
              starSpacing="15px"
            />
          </FormGroup>);
      case 'MULTIPLE_CHOICE_IMAGE':
        return (<FormGroup>
            <Checkbox>
              <img alt="img1" src={Pic1}
              style={{width:"50px",height:"50px"}} />
            </Checkbox> 
            <Checkbox >
              <img alt="img1" src={Pic2}
              style={{width:"50px",height:"50px"}} />
            </Checkbox>
            <Checkbox >
              <img alt="img1" src={Pic3}
              style={{width:"50px",height:"50px"}} />
            </Checkbox>
          </FormGroup>);
      case 'DATE_TIME':
        return (<FormGroup controlId="startDate">
            <ControlLabel>DateTIimePicker:</ControlLabel>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleDateChange}
                showTimeSelect
                dateFormat="LLL"
            />
          </FormGroup>);
      case 'YES_NO':
        return (<FormGroup controlId="tfans">
            <Radio name="radioGroup" inline>
              Yes
            </Radio>{' '}
            <Radio name="radioGroup" inline>
              No
            </Radio>{' '}
          </FormGroup>);
      case 'SHORT_ANSWER':
        return (<FormGroup controlId="question6">
            <FormControl
              onChange={this.handleChange}
              value={this.state.question6}
              componentClass="textarea"
            />
          </FormGroup>);
      default:
        return (<FormGroup controlId="question6">
            <FormControl
              onChange={this.handleChange}
              value={this.state.question6}
              componentClass="textarea"
            />
          </FormGroup>);
    }
  }

handleSubmit = event => {
  event.preventDefault();
  alert("Congrats! Thank you for taking the survey!")
  this.props.history.push("/");
}

  renderSurveys() {
    return (

      <div className="notes">
       <form onSubmit={this.handleSubmit}>
        <PageHeader>{'Survey ID: ' + this.state.surveyId}</PageHeader>
        <Label>{'Start time: ' + this.state.startTime}</Label>
        <Label>{' End Time: ' + this.state.endTime}</Label>
        <ListGroup>
          {!this.state.isLoading && this.renderSurveysList(this.state.questions)}
        </ListGroup>
        <Button bsStyle="success" type="submit">Submit</Button>
        </form>
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