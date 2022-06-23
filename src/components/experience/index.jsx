import React, { Component } from 'react';
import {
  Accordion,
  Header,
  Icon,
} from 'semantic-ui-react';

import AcademicCards from './cards/AcademicCards';
import FellowshipCards from './cards/FellowshipCards';
import ResearchCards from './cards/ResearchCards';
import WorkCards from './cards/WorkCards';

class ExperienceBody extends Component {

  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
   const { index } = titleProps
   const { activeIndex } = this.state
   const newIndex = activeIndex === index ? -1 : index

   this.setState({ activeIndex: newIndex })
  }

  render() {
    const style = {
      padding: '64px',
    }

    const { activeIndex } = this.state;
    return (
      <div>
        <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h1">
              <Icon name="graduation" />
              Academic
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <AcademicCards />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h1">
              <Icon name="industry" />
              Industry
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <WorkCards />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h1">
              <Icon name="chart pie" />
              Research
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <ResearchCards />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            <Header style={{ display: 'inline' }} as="h1">
              <Icon name="globe" />
              Fellowship
            </Header>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <FellowshipCards />
          </Accordion.Content>

        </Accordion>
      </div>
    );
  }

}

export default ExperienceBody;
