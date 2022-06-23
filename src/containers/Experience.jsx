import React, { Component } from 'react';
import {
  Container,
} from 'semantic-ui-react';

import ExperienceBody from '../components/experience';
import NavBar from './../components/navbar';

class Experience extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-body">
          <Container textAlign="left">
            <ExperienceBody />
          </Container>
        </div>
      </div>
    );
  }

}

export default Experience;
