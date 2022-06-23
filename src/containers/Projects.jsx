import React, { Component } from 'react';
import {
  Container,
} from 'semantic-ui-react';

import ProjectsBody from './../components/projects';
import NavBar from './../components/navbar';

class Projects extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-body">
          <Container>
            <ProjectsBody />
          </Container>
        </div>
      </div>
    );
  }

}

export default Projects;
