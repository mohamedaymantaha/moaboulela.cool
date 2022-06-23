import React, { Component } from 'react';
import {
  Card,
  Icon,
  Image,
  Popup,
} from 'semantic-ui-react';

import * as cisco from './../../../images/cisco.png';
import * as colab from './../../../images/colab.png';
import * as cruise from './../../../images/cruise.png';
import * as dukehealth from './../../../images/dukehealth.jpg';
import * as dukeoit from './../../../images/dukeoit.png';
import * as medsender from './../../../images/medsender.png';
import * as salesforce from './../../../images/salesforce.png';
import * as seventhai from './../../../images/seventhai.png';
import * as twitter from './../../../images/twitter.png';
import * as teaching from './../../../images/teaching.png';

class WorkCards extends Component {

  render() {
    return (
      <Card.Group centered stackable doubling itemsPerRow={3}>
        <Card color="orange">
          <Image src={cruise} />
          <Card.Content>
            <Card.Header>Cruise</Card.Header>
            <Card.Meta>Software Engineer</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> San Francisco, CA
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> August 2020 - Ongoing
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                <b>Team: </b>
                AV - Machine Learning Platform
              </p>
              <p>
                The team is responsible for model training infrastructure, frameworks and related tools. Some examples of projects we work on are:
              </p>
              <p>
                Experiment Management,
                Model Traceability,
                Training Reliability,
                Training Cost Efficiency,
                Data/Model Visualization Tools,
                Training Frameworks (both deep learning and non-deep-learning),
                Hyperparameter Tuning, and
                Job Orchestration.
              </p>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="blue">
          <Image src={seventhai} />
          <Card.Content>
            <Card.Header>Seventh AI</Card.Header>
            <Card.Meta>Project Phoenix Technical PM</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Remote
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2020 - August 2020
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                Worked as General Project Manager with Seventh.ai through Duke Applied Machine Learning Group's Project Phoenix. I was the middle man between the company and the Duke student group in managing all of the Duke student interns at Seventh.ai.
              </p>
              <p>
                Helped build ML and NLP infrastructure for Seventh's IP and company search alogorithms.
              </p>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="blue">
          <Image src={colab} size="large"/>
          <Card.Content>
            <Card.Header>Duke Innovation Co-lab</Card.Header>
            <Card.Meta>Full Stack Engineer and Software Consultant</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> August 2018 - August 2020
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                Built software tools for Duke faculty and students using technologies such as React, Rails, SQL, and Docker.
                <a style={{ marginLeft: '4px'}} href="https://colab.duke.edu/" target="_blank">
                   <Icon name="linkify"/>
                </a>
              </p>
              <p>
                Teach classes and held office hours on software development skills.
                <a style={{ marginLeft: '4px'}} href="https://colab.duke.edu/roots" target="_blank">
                   <Icon name="linkify"/>
                </a>
                <br />
                <br />
                <Popup
                  trigger={
                    <Image rounded src={teaching} />
                  }
                  content="Teaching a Roots Course (Feb. 2019)"
                />
                <br />
              </p>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="orange">
          <Image src={cruise} />
          <Card.Content>
            <Card.Header>Cruise</Card.Header>
            <Card.Meta>Infrastructure Software Engineering Intern</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> San Francisco, CA
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2019 - August 2019
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                <b>Team: </b>
                Engineering Productivity - PaaS (Platform as a Service)
              </p>
              <p>
                Handled all cloud production services used by Cruise engineers on the Google Cloud Platform.
              </p>
              <p>
                Worked on an internal service called GoLinks, which handled url shortners securly. Built service in Golang. Managed user authentication and authorization with SAML. Managed certificates with Let's Encrypt. Deployed services on containers via Docker and Kubernetes.
              </p>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="teal">
          <Image src={salesforce} size="large"/>
          <Card.Content>
            <Card.Header>Salesforce (Heroku)</Card.Header>
            <Card.Meta>Software Engineering Intern</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> San Francisco, CA
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2018 - August 2018
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                <b>Team: </b>
                Ecosystem Team
              </p>
              <p>
                From scratch, built an open-source plugin for Heroku's CLI that allows clients to manage and create Heroku addons replacing Heroku's legacy tool known as kensa. Used by thousands of Heroku customers today.
              </p>
              <p>
                Began the work on an internal tool that fetches Pagerduty data for Heroku engineers built in the functional programming language known as Elixir.
              </p>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="purple">
          <Image src={medsender} size="big"/>
          <Card.Content>
            <Card.Header>Medsender</Card.Header>
            <Card.Meta>Full Stack Intern & Co-Op</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> New York, NY
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> June 2017 - May 2018
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <p>
                Built a medical record inbox and record viewer with auto-complete medical record search and customizable UI in React.
              </p>
              <p>
                Worked on the admin dashboard,user authentication,audit logs, and record upload using Ruby on Rails and Google Cloud.
              </p>
              <p>
                Built integration software with EMR/EHR systems,such as Athena and Epic
              </p>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="blue">
          <Image src={dukehealth} size="big"/>
          <Card.Content>
            <Card.Header>Duke Cancer Institute of Health</Card.Header>
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
                Built React web apps used as a tool for doctors and patients.
                <a style={{ marginLeft: '4px'}} href="https://pcforme.org/pc-for-me/" target="_blank">
                   <Icon name="linkify"/>
                </a>
              </p>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="teal">
          <Image src={twitter} size="big"/>
          <Card.Content>
            <Card.Header>Twitter</Card.Header>
            <Card.Meta>#EarlyBird</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> San Francisco, CA
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2017
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              College freshman code bootcamp dedicated to minorities in the tech industry. Competitively worked on teams to hack together a new tweet feature for Twitter, which we presented to multiple engineers and the Twitter CEO.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="blue">
          <Image src={dukeoit} size="big"/>
          <Card.Content>
            <Card.Header>Duke OIT</Card.Header>
            <Card.Meta>Tech Consultant</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Raleigh-Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> August 2016 - May 2017
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              Held office hours for software and hardware related problems from Duke students and faculty.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card color="red">
          <Image src={cisco} size="big"/>
          <Card.Content>
            <Card.Header>Cisco</Card.Header>
            <Card.Meta>Network Engineer Consultant Shadow</Card.Meta>
            <Card.Meta>
              <Icon name="map marker alternate"/> Raleigh-Durham, NC
            </Card.Meta>
            <Card.Meta>
              <Icon name="calendar"/> May 2015 - August 2015
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              Program for high school students in the RDU Triangle Area to gain experience in the tech industry.
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }

}

export default WorkCards;
