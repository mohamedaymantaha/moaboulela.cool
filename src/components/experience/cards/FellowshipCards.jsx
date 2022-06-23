import React, { Component } from 'react';
import {
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';

import * as code2040 from './../../../images/code2040.png';

class FellowshipCards extends Component {

  render() {
    return (
      <Card.Group stackable doubling itemsPerRow={3}>
        <Card color="blue">
          <Image src={code2040} size="large"/>
          <Card.Content>
            <Card.Header>Code2040</Card.Header>
            <Card.Meta>Summer Fellow</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> San Francisco, CA
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> Summer 2018, Summer 2019
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              The Fellows Program is an intensive career accelerator for Black and Latinx college and graduate-level computer science students. For 9 weeks between June and August 2018 and 2019, I engaged in racial equity advocacy work in the tech industry while interning at Salesforce and Cruise.
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }

}

export default FellowshipCards;
