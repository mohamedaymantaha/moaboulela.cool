import React, { Component } from 'react';
import {
  Button,
  Icon,
  Item,
  Embed
} from 'semantic-ui-react';

// images
import * as actfor from './../../../images/actfor.png';
import * as colab from './../../../images/colab.png';
import * as dmm from './../../../images/dmm.png';
import * as gthc from './../../../images/gthc.png';
import * as hackduke from './../../../images/hackduke.png';
import * as heroku from './../../../images/heroku.png';
import * as mufc from './../../../images/mufc.png';
import * as nlp from './../../../images/nlp.png';
import * as walla from './../../../images/walla.jpeg';

class CodingItems extends Component {

  render() {
    return (
      <div>
        <Item.Group divided>
          <Item>
            <Item.Image rounded src={gthc} size="small"/>

            <Item.Content>
              <Item.Header>
                GTHC - Game Tenting Help Center
                <a style={{ marginLeft: '4px'}} href="https://gthc.io/" target="_blank">
                  <Icon name="linkify"/>
                </a>
                <a style={{ marginLeft: '4px'}} href="https://github.com/gthc/" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>Duke vs UNC Basketball Tenting Scheduling for Duke Students</Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> February 2018 - Ongoing
              </Item.Description>
              <Item.Description>
                GTHC is a web-based scheduling tool for Duke Krzyzewskiville tenters. This platform prioritizes ease of use, organization, optimization, and collaboration for each tenter. In a single glance, GTHC will tell you the important details of your team's shifts, and with a few clicks, your team will know who, when, and what about any and all of your shifts. GTHC will also bring you updates from your team, the line monitors, and any important K-Ville news. Our end goal is to make life as a tenter easier. GTHC has had over 4000 unique visitors to our site and hundreds of Duke students consistently using our plaform over the 2019 and 2020 men's basketball seasons.
              </Item.Description>
              <Item.Description>
                <p>
                  <b>
                    GTHC in The News
                  </b>
                </p>
                <p>
                  <a
                    href="https://www.dukechronicle.com/article/2020/01/duke-basketball-tenting-gthc-app-krzyzewskiville"
                    target="_blank"
                  >
                    Duke Chronicle - "GTHC, a student-made app for tenters, hits Krzyzewskiville"
                  </a>
                </p>
                <p>
                  <a
                    href="https://youtu.be/59Eyfntv6fo?t=1320"
                    target="_blank"
                  >
                    K-Ville Documentary - "IN TENTS: Welcome to Krzyzewskiville"
                  </a>
                </p>
                <p>
                  <b>Duke Basketball Inteviews GTHC team</b>
                </p>
                <Embed
                  defaultActive
                  iframe={<iframe width="560" height="315" src="https://www.youtube.com/embed/bdoCzHORP0g?start=450" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                />
              </Item.Description>
              <Item.Extra>Skills: Ruby On Rails, React, Redux, SQL, Docker, Heroku, iOS, Android</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={actfor} size="tiny"/>

            <Item.Content>
              <Item.Header>
                ActFor
                <a style={{ marginLeft: '4px'}} href="https://actfor.us" target="_blank">
                  <Icon name="linkify"/>
                </a>
                <a style={{ marginLeft: '4px'}} href="https://github.com/amanmibra/actfor" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>
                Website that builds on the work of activists and encourages action on social justice issues
              </Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> July 2020 - Ongoing
              </Item.Description>
              <Item.Description>
                The purpose of this website is to highlight the voices of activists on issues we care about and to encourage the everyday citizen to take action. We noticed that many people speak passionately about a variety of issues on social media, and we wanted to help everyone take the next step by translating education into action. In regards to these issues, our website is an easy and accessible way to consolidate information, contact officials, donate, and keep track of upcoming elections.
              </Item.Description>
              <Item.Extra>Skills: React, Heroku</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={colab} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Duke Project Discover
                <a style={{ marginLeft: '4px'}} href="https://colab.duke.edu/discover" target="_blank">
                  <Icon name="linkify"/>
                </a>
              </Item.Header>
              <Item.Meta>
                Find collaborators for your project idea or find a project to join.
              </Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> August 2018 - May 2020
              </Item.Description>
              <Item.Description>
                Duke students often come to the Co-Lab with project ideas but no way of finding others who may be interested in joining. Discover is a way to find potential teammates by skill set (ie. design, marketing, backend development). Discover also functions as a platform for students to look at existing projects and connect with the project owner.
              </Item.Description>
              <Item.Extra>Skills: Ruby on Rails, React, PostgreSQL, Docker</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={heroku} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Heroku CLI Plugin
                <a style={{ marginLeft: '4px'}} href="https://devcenter.heroku.com/articles/building-an-add-on" target="_blank">
                  <Icon name="linkify"/>
                </a>
                <a style={{ marginLeft: '4px'}} href="https://github.com/heroku/heroku-cli-addons-admin" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>
                Heroku CLI plugin to help Heroku add-on providers integrate their services with Heroku
              </Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> Summer 2018
              </Item.Description>
              <Item.Description>
                Plugin for Heroku's CLI that allows clients to manage and create Heroku addons replacing Heroku's legacy tool known as kensa. Used by thousands of Heroku customers today.
              </Item.Description>
              <Item.Extra>Skills: Typescript, oclif</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={nlp} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Natural Language Processing - GloVe
                <a style={{ marginLeft: '4px'}} href="https://github.com/amanmibra/GloVe" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>
                Medical Record Word Embeddings
              </Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> May 2018
              </Item.Description>
              <Item.Description>
                Used GloVe model to interpret synonyms, such as acronyms and alternative terms, used in actual patient health records.
              </Item.Description>
              <Item.Extra>Skills: Python, Natural Language Processing</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={dmm} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Duke Major Mapper
                <a style={{ marginLeft: '4px'}} href="https://github.com/duke-major-mapper/" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>Tool to help students find their Duke major requirements</Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> October 2017 - January 2018
              </Item.Description>
              <Item.Description>
                Web app that will display all of a students required courses for a certain major, including the overlapping courses between double majors. Pitched application to Duke's Office of Information Technology (OIT), and it helped inspire the renovation of Duke's online student hub, known as DukeHub.
              </Item.Description>
              <Item.Extra>Skills: React, Redux, CloudSQL, Google Cloud Platform</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={mufc} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Manchester United sub-reddit (/r/reddevils) Twitter bot - @reddevilsbot
                <a style={{ marginLeft: '4px'}} href="https://twitter.com/reddevilsbot" target="_blank">
                  <Icon name="linkify"/>
                </a>
                <a style={{ marginLeft: '4px'}} href="https://github.com/amanmibra/reddevils-Twitter-Bot" target="_blank">
                  <Icon name="github"/>
                </a>
              </Item.Header>
              <Item.Meta>Automate Manchester United news to your twitter feed</Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> June 2017
              </Item.Description>
              <Item.Description>
                Twitter bot that posts news about my favorite soccer team by using Reddit’s algorithm to choose the top posts of every hour.
              </Item.Description>
              <Item.Extra>Skills: NodeJS, Twitter API, Reddit API</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={walla} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Walla - Android Development
                <a style={{ marginLeft: '4px'}} href="https://pratt.duke.edu/about/news/walla-wins-duke-startup-challenge" target="_blank">
                  <Icon name="linkify"/>
                </a>
              </Item.Header>
              <Item.Meta>
                Brings students together to share in events and activities
              </Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> January 2017 - March 2017
              </Item.Description>
              <Item.Description>
                <p>
                  Worked as an Android Developer at this startup, and developed software features for the Android product that acts as a hub for various activities for college students on their university's campus
                </p>
                <p>
                  Product won $50,000 from Duke Startup Competition
                </p>
                <p>
                  Company was eventually acquired
                </p>
              </Item.Description>
              <Item.Extra>Skills: Java, Android</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image rounded src={hackduke} size="tiny"/>

            <Item.Content>
              <Item.Header>
                Hack Duke 2016 - GiveMeGreen
                <a style={{ marginLeft: '4px'}} href="https://devpost.com/software/givemegreen" target="_blank">
                  <Icon name="linkify"/>
                </a>
              </Item.Header>
              <Item.Meta>
                Environmental projects through crowdsourcing
              </Item.Meta>
              <Item.Description>
                <Icon name="calendar outline"/> November 2016
              </Item.Description>
              <Item.Description>
                An iOS app that promotes environmental projects through crowdsourcing that will improve the environment. App used bitcoin as one of the forms of currency to fund the environment projects.
              </Item.Description>
              <Item.Description>
                <p><b>Awards and Prizes:</b></p>
                <p>Coinbase - Best Use of Bitcoin blockchains</p>
                <p>Team won one bitcoin valued at ~$750 (November 2016)</p>
              </Item.Description>
              <Item.Extra>Skills: Swift, Coinbase API</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }

}

export default CodingItems;
