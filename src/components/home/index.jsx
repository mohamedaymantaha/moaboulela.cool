import React, { Component } from 'react';

import Typed from 'react-typed';
import { Button, Icon, Image } from 'semantic-ui-react';

import * as logo from './../../images/logo.gif'

class HomeBody extends Component {

  render() {
    const initString = 'I am <b>Aman Ibrahim</b>, a software engineer. <br /> I am also a'

    const strings = [
      `${initString} Muslim.`,
      `${initString} Manchester United fan.`,
      `${initString} Mustang S197 owner.`,
      `${initString} Duke Blue Devil.`,
      `${initString} tech enthusiast.`,
      `${initString} North Carolinian.`,
      `${initString} student learning everyday.`
    ]
    return (
      <div className="App">
        <header className="App-header">
          <Image className="App-logo" src={logo} size="small"/>
          <br />
          <div style={{ width: '2000px' }} className="bg-image">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
          </div>
          <div>
            <Button circular icon='github' target="_blank" href="https://github.com/amanmibra" />
            <Button circular color='twitter' icon='twitter' target="_blank" href="https://twitter.com/amanmibra" />
            <Button circular color='linkedin' icon='linkedin' target="_blank" href="https://www.linkedin.com/in/amanmibra/"/>
            <br />
          </div>
          <br />
          <div>
            <p>
              <Typed
                strings={strings}
                typeSpeed={50}
                backSpeed={50}
                backDelay={1}
                smartBackspace
              />
            </p>
          </div>
          <br />
          <div>
            <Button
              icon
              color="blue"
              href="/about"
              labelPosition="left"
            >
              <Icon name="user" />
              About Me
            </Button>
            <Button
              icon
              color="blue"
              href="/experience"
              labelPosition="left"
            >
              <Icon name="briefcase" />
              My Experience
            </Button>
            <Button
              icon
              color="blue"
              href="/projects"
              labelPosition="left"
            >
              <Icon name="code" />
              My Projects
            </Button>
            <Button
              icon
              color="blue"
              href="/resume"
              labelPosition="left"
            >
              <Icon name="file alternate" />
              My Resume
            </Button>
            <div className="App-footer">
              <p>
                Made with
                <Icon style={{ paddingLeft: '0.2em'}} name="react" />
                by Aman Ibrahim
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://github.com/amanmibra/amanis.cool"
                >
                  <Icon style={{ paddingLeft: '0.2em'}} name="github alternate" />
                </a>
              </p>
            </div>
            <div style={{ width: '2000px' }} className="bg-image">
              <div id="stars" style={{ animationDelay: '5s' }}/>
              <div id="stars2" />
              <div id="stars3" />
            </div>
          </div>
        </header>
      </div>
    );
  }

}

export default HomeBody;
