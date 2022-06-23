import React, { Component } from 'react';
import {
  Container,
  Divider,
  Flag,
  Icon,
  Item,
  Segment,
  Transition,
} from 'semantic-ui-react';

import NavBar from './../components/navbar';

import * as aman from './../images/aman.jpeg';

// other aman images
import * as img1 from './../images/profile/1.jpg';
import * as img2 from './../images/profile/2.jpg';
import * as img3 from './../images/profile/3.jpg';
import * as img4 from './../images/profile/4.jpg';
import * as img5 from './../images/profile/5.jpg';
import * as img6 from './../images/profile/6.jpg';
import * as img7 from './../images/profile/7.jpg';
import * as img8 from './../images/profile/8.jpg';
import * as img9 from './../images/profile/9.jpg';
import * as img10 from './../images/profile/10.jpg';
import * as img11 from './../images/profile/11.jpg';
import * as img12 from './../images/profile/12.jpg';
import * as img13 from './../images/profile/13.jpg';
import * as img14 from './../images/profile/14.jpg';
import * as img15 from './../images/profile/15.jpg';

class About extends Component {
  constructor(props) {
    super(props);
    const all = [
      aman,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
    ]

    const good = [
      aman,
      img1,
      img2,
      img5,
      img6,
      img7,
      img8,
      img12,
      img13,
      img14,
      img15,
    ]
    this.state = {
      all: all,
      good: good,
      profile: good[Math.floor(Math.random()*good.length)],
    }
  }

  onFlagClick = () => {
    const { all } = this.state;
    this.setState({
      profile: all[Math.floor(Math.random()*all.length)],
    })
  }

  render() {
    const { profile } = this.state;

    return (
      <div>
        <NavBar />
        <div className="page-body">
          <Container>
            <Transition transitionOnMount duration={2000}>
              <Segment>
                <Item.Group divided>
                  <Item>
                    <Item.Image rounded src={profile} size="medium"/>

                    <Item.Content verticalAlign="middle">
                      <Item.Header>Aman Ibrahim <Flag onClick={this.onFlagClick} name='er'/></Item.Header>
                      <Item.Meta>Machine Learning Infrastructure @ <b>Cruise</b></Item.Meta>
                      <Divider />
                      <Item.Description>
                        <div>
                          <p>
                            I grew up in Raleigh, NC, and graduated from Duke on May 2020 with a Bachelor of Science in Computer Science.
                          </p>
                          <p>
                            I have great experience in Full Stack Web Development as I have worked in the front-end, back-end, and DevOps on multiple web applications. I have worked on projects on all stages from early planning to testing to launch and production.
                          </p>
                          <p>
                            My current interest is in the sphere of Artifical Intelligence, in particular to Machine Learning and Natural Language Processing. I am looking towards gaining more experience in this field through industry and graduate school.
                          </p>
                        </div>
                      </Item.Description>
                    </Item.Content>
                  </Item>

                  <Item>
                    <Item.Content>
                      <a href="mailto:amanmibra@gmail.com">
                        <Icon name="mail" />
                        amanmibra@gmail.com
                      </a>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
            </Transition>
          </Container>
        </div>
      </div>
    );
  }

}

export default About;
