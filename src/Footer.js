import React, { Component } from 'react'
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>© CMPE275 Company 2018</p>
        </footer>
      </Grid>
    );
  }
}

export default Footer;