import './index';
import Home from './Components/Home';
import MobileHome from './Components/MobileHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';

import { useMediaQuery } from 'react-responsive';

import MediaQuery from 'react-responsive'

// import { DesktopNav, TabletNav, MobileNav } from './components';


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  };

  useEffect (() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


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

      {windowWidth < 500 ? (
        <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='phoneBg'>
          <center>
          <div className="phone">
          </div>
          </center>
          <div className="message">
             Please rotate your device!
          </div>
        </div>
        </div>
      ) : (<MobileHome />)}

      
        
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