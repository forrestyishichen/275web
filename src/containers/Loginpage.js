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
        alert(window.localStorage.getItem('check'));
        // if (window.localStorage.getItem('check') == this.state.email) {
        //   alert("OK");
        // }
        // window.localStorage.setItem('user', this.state.email);
        // this.props.userHasAuthenticated(true);
        // this.props.history.push("/");
        // alert("Invalid user and password! Pleae try again!");
        this.setState({ isLoading: false });
        window.localStorage.removeItem('check');
        this.props.history.push("/login");
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }

  }

  getLogIn() {
    // fetch('http://localhost:8080/login?email=${this.state.email}')
    // .then(result => result.json())
    // .then(data => {
    //   window.localStorage.setItem('check', data.email);
    // }).catch((error) => {
    //   alert(error.message);
    // })

    // $.ajax({
    //   url: "/http://localhost:8080/login", 
    //   data: {email: this.state.email, password: this.state.password},
    //   type: 'get',
    //   error: function(XMLHttpRequest, textStatus, errorThrown){
    //       alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
    //   },
    //   success: function(data){
    //     window.localStorage.setItem('check', data.email)
    //   }
    // });


    $.get('http://localhost:8080/login', {
        email: this.state.email,
        password: this.state.password},
        function (data) {
          window.localStorage.setItem('check', data.email);
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