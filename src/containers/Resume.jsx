import React, { Component } from 'react';
import {
  Container,
  Image
} from 'semantic-ui-react';

import NavBar from './../components/navbar';

import * as btn from './../images/resume_menu_btn.png';

class Resume extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-body">
          <Container fluid textAlign="center">
            <p>
              To download a copy, click the menu button <Image src={btn} style={{ display: 'inline'}} size="mini"/> below.
            </p>
            <iframe src="https://onedrive.live.com/embed?cid=DDBC24E3C0D79D42&resid=DDBC24E3C0D79D42%21627700&authkey=AE1qpC2-Lyl-8cY&em=2" width={"750px"} height={"1050px"} frameborder="0" scrolling="no" style={{ border: '1px solid black' }}></iframe>
          </Container>
        </div>
      </div>
    );
  }

}

export default Resume;
