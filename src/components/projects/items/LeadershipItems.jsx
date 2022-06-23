import React, { Component } from 'react';
import {
  Icon,
  Item,
} from 'semantic-ui-react';

import * as phoenix from './../../../images/phoenix.png';

class LeadershipItems extends Component {

  render() {
    return (
      <div>
        <Item.Group divided>
          <Item>
            <Item.Image rounded src={phoenix} size="small"/>

            <Item.Content>
              <Item.Header>
                DAML - The Phoenix Project
                <a style={{ marginLeft: '4px'}} href="https://www.dukeaml.com/ThePhoenixProject" target="_blank">
                  <Icon name="linkify"/>
                </a>
              </Item.Header>
              <Item.Meta>Seventh.ai's General Project Manager and Project Lead</Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> May 2020 - August 2020
              </Item.Description>
              <Item.Description>
                The Duke University Phoenix Project brought together 150 Duke students who had lost internships to work on end-to-end technical solutions for companies during Summer 2020, due to COVID-19. Worked as a General Product Manager for a group of Duke undergraduates working with the company seventh.ai
              </Item.Description>
              <Item.Description>
                As a project lead, I was working on building the web and mobile applications and the NLP services for seventh's platform for novel intellectual property for inventors/researchers/startup founders, investors, and legal practitioners to share, find, and manage new IP. All in time for their very important demo before investors at The Alchemist Accelerator which happened in September 2020.
              </Item.Description>
              <Item.Extra>Skills: Team Management, Express, React, Docker, NLP</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }

}

export default LeadershipItems;
