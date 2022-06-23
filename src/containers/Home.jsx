import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import HomeBody from './../components/home';

class Home extends Component {

  render() {
    const widths = [window.innerWidth];

    if (window.screen?.width) {
      widths.push(window.screen?.width);
    }

    const width = Math.min(...widths);
    return (
      <div>
        { width <= 760 ?
          <Redirect to="/about" />
          :
          <HomeBody />
        }
      </div>
    );
  }

}

export default Home;
