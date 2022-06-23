import React, { Component } from 'react';
import {
  Button,
  Divider,
  Header,
  Icon,
} from 'semantic-ui-react';

import CodingItems from './items/CodingItems';
import ResearchItems from './items/ResearchItems';
import LeadershipItems from './items/LeadershipItems';

class ProjectsBody extends Component {

  render() {
    return (
      <div>
        <Header as="h1" dividing>Research Projects</Header>
        <ResearchItems />
        <Header as="h1" dividing>Coding Projects</Header>
        <CodingItems />
        <Header as="h1" dividing>Leadership Projects</Header>
        <LeadershipItems />
        <Divider />
        <Button as="a" target="_blank" href="https://github.com/amanmibra?tab=repositories" color="blue">
          <Icon name='github' /> Want to see more? Check out my 40+ other Github Repos!
        </Button>
      </div>
    );
  }

}

export default ProjectsBody;
