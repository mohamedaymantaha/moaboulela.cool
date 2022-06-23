import React, { Component } from 'react';
import {
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';

import * as duke from './../../../images/duke.png';

class AcademicCards extends Component {

  render() {
    return (
      <Card.Group stackable doubling itemsPerRow={3}>
        <Card color="blue">
          <Image src={duke} size="large"/>
          <Card.Content>
            <Card.Header>Duke University</Card.Header>
            <Card.Meta>Bachelor of Science - Computer Science</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> August 2016 - May 2020
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                Muslim Student Association - President, Treasurer, Weekly Events Chair, Class Representative
              </p>
              <p>
                Students for Justice of Palestine - Treasurer
              </p>
              <p>
                GTHC - Founder
              </p>
              <p>
                DAML (Duke Applied Machine Learning)
              </p>
              <p>
                Duke Club Soccer
              </p>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }

}

export default AcademicCards;
