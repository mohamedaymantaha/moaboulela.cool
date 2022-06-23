import React, { Component } from 'react';
import {
  Container,
  Icon,
  Image,
  Menu
} from 'semantic-ui-react';

import * as logo from './../../images/logo.gif'

class NavBar extends Component {

  render() {
    return (
      <div id="navbar">
        <Menu fixed='top' inverted stackable>
          <Container>
            <Menu.Item as='a' href="/" header>
              <Image src={logo} className="App-logo" size="mini"/>
            </Menu.Item>
            <Menu.Item as='a' href="/about">
              <Icon name="user" />
              About Me
            </Menu.Item>

            <Menu.Item as='a' href="/experience">
              <Icon name="briefcase" />
              My Experience
            </Menu.Item>

            <Menu.Item as='a' href="/projects">
              <Icon name="code" />
              My Projects
            </Menu.Item>

            <Menu.Item as='a' href="/resume">
              <Icon name="file alternate" />
              My Resume
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }

}

export default NavBar;
