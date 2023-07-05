import './index';
import Home from './Components/Home';
import MobileHome from './Components/MobileHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { useMediaQuery } from 'react-responsive';

import MediaQuery from 'react-responsive'

// import { DesktopNav, TabletNav, MobileNav } from './components';


function App() {
  return (
    <div>
      <MediaQuery minWidth={992}>
        {/* LAPTOP */}
        <Home />
      </MediaQuery>
      {/* <MediaQuery minWidth={768} maxWidth={991}>
        <h1>TABLET OR LANDSCAPE SMARTPHONE</h1>
      </MediaQuery> */}
      <MediaQuery maxWidth={767}>
        {/* SMARTPHONE */}
        <MobileHome />
      </MediaQuery>
      {/* <MediaQuery minResolution="2dppx">
        {(matches) =>
        matches
        ? <p>And you are high DPI</p>
        : <p>And you are low DPI</p>
        }

      </MediaQuery> */}
    </div>
  );
}

export default App;