import React, { Component, Fragment } from 'react';
import './App.css';
import Footer from './Footer';
import Routes from './Routes';
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    window.localStorage.removeItem('userid');
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      userRecord: this.userRecord
    };

    return (
      <div className="App Site">
        <div className="Site-content">
          <div>
            <Navbar fluid collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">CMPE275-SurveyApe</Link>
                </Navbar.Brand>
              <Navbar.Toggle />
              </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    {this.state.isAuthenticated
                    ? 
                    <Fragment>
                      <LinkContainer to="/allGsurvey">
                          <NavItem>Take a survey</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/listall">
                        <NavItem>Manage your survey</NavItem>
                      </LinkContainer>
                    </Fragment>
                    :
                    <Fragment> 
                      <LinkContainer to="/allGsurvey">
                        <NavItem>Take a survey</NavItem>
                      </LinkContainer>
                    </Fragment>
                    }
                  </Nav>
                  <Nav pullRight>
                    {this.state.isAuthenticated
                    ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                    : <Fragment>
                        <LinkContainer to="/signup">
                          <NavItem>Signup</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/login">
                          <NavItem>Login</NavItem>
                        </LinkContainer>
                      </Fragment>
                    }
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div>
              <Routes childProps={childProps} />
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
