import React, { Component } from 'react';
import {
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';

import * as duke from './../../../images/duke.png';
import * as dukecancer from './../../../images/dukecancer.png';

class ResearchCards extends Component {

  render() {
    return (
      <Card.Group stackable doubling itemsPerRow={3}>
        <Card color="blue">
          <Image src={duke} size="large"/>
          <Card.Content>
            <Card.Header>Duke Big Ideas Lab</Card.Header>
            <Card.Meta>Undergraduate Researcher</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> January 2020 - August 2020
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                <b>Projects:</b>
              </p>
              <p>
                MoveIt/Nutrics: An adaptive recommendation model for nutrition and physical activity
                <a style={{ marginLeft: '4px'}} href="http://dunn.pratt.duke.edu/team" target="_blank">
                  <Icon name="linkify"/>
                </a>
              </p>
              <p>
                Covidentify: Wearable Tech and Covid-19 Data
                <a style={{ marginLeft: '4px'}} href="https://covidentify.org/" target="_blank">
                  <Icon name="linkify"/>
                </a>
              </p>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="blue">
          <Image src={dukecancer} size="large"/>
          <Card.Content>
            <Card.Header>Duke Cancer Institute</Card.Header>
            <Card.Meta>Web Developer</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2017 - August 2017
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                <b>Projects:</b>
              </p>
              <p>
                PCforMe: Web-based preparation and engagement tool about palliative care
                <a style={{ marginLeft: '4px'}} href="https://pcforme.org" target="_blank">
                  <Icon name="linkify"/>
                </a>
              </p>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }

}

export default ResearchCards;
