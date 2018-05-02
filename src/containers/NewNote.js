import React, { Component } from "react";
import StarRatings from 'react-star-ratings';
import DatePicker from 'react-datepicker';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Checkbox, Radio, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./NewNote.css";
import Pic1 from './1.png';
import Pic2 from './2.png';
import Pic3 from './3.png';

export default class NewNote extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      content: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      rating: 1,
      startDate: moment(),
      tfans: "",
      select1: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  changeRating( newRating ) {
      this.setState({
        rating: newRating
      });
    }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();

    if (this.file && this.file.size > 5000000) {
      alert("Please pick a file smaller than 5MB");
      return;
    }

    this.setState({ isLoading: true });
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="NewNote">
        <form onSubmit={this.handleSubmit}>
        <h3>Please create your survey!</h3>
          <FormGroup controlId="question1">
            <ControlLabel>Question 1: Dropdown with text</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.question1}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="select1">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="question2">
            <ControlLabel>Question 2: Checkbox with pics</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.question2}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup>
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
          </FormGroup>
          <FormGroup controlId="question3">
            <ControlLabel>Question 3: Yes/No</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.question3}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="tfans">
            <Radio name="radioGroup" inline>
              Yes
            </Radio>{' '}
            <Radio name="radioGroup" inline>
              No
            </Radio>{' '}
          </FormGroup>
          <FormGroup controlId="question4">
            <ControlLabel>Question 4: DateTIimePicker Question</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.question4}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="startDate">
            <ControlLabel>DateTIimePicker:</ControlLabel>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleDateChange}
                showTimeSelect
                dateFormat="LLL"
            />
          </FormGroup>
          <FormGroup controlId="question5">
            <ControlLabel>Question 5: Rating Question</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.question5}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlID="rating">
            <StarRatings
              rating={this.state.rating}
              starRatedColor="red"
              changeRating={this.changeRating}
              numberOfStars={5}
              starDimension="40px"
              starSpacing="15px"
            />
          </FormGroup>
          <FormGroup controlId="question6">
            <ControlLabel>Question 6: Short Answer Question</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.question6}
              componentClass="textarea"
            />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating…"
          />
        </form>
      </div>
    );
  }
}