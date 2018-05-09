import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Loginpage.css";
import LoaderButton from "../components/LoaderButton";

var $ = require('jquery');

export default class Loginpage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
        await this.getLogIn();
        if (window.localStorage.getItem('check') === this.state.password) {
          alert("Login success!")
          window.localStorage.removeItem('check');
          this.props.userHasAuthenticated(true);
          this.props.history.push("/");
        } else {
          window.localStorage.removeItem('check');
          window.localStorage.removeItem('userid');
          alert("Invalid user and password! Pleae try again!");
          this.props.history.push("/login");
        }
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }

  }

  getLogIn() {
    $.get('http://localhost:8080/login', {
        email: this.state.email,
        password: this.state.password},
        function (data) {
          console.log(data);
          if (data != null) {
            window.localStorage.setItem('check', data.password);
            window.localStorage.setItem('userid', data.id);
          } else {
            alert("No such User!");
          }
    }).fail(function() {
      alert("Failed");
    });
  }

  render() {
    return (
      <div className="Login">
        <h3>Please Login</h3>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />

        </form>
      </div>
    );
  }
}