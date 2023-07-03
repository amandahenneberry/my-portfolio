import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { ProjectPage } from './ProjectPage';
import React, { useEffect, useState } from 'react';

import { dailyWebLog } from './DailyWebLog/dailyWebLog';

import { goghOn } from './GoghOn/goghOn';

import { portfolio } from './Portfolio/portfolio';



function ProjectsTabs() {
    const [key, setKey] = useState(1);
    const [hover1, onHover1] = useState(false)
    const [hover2, onHover2] = useState(false)
    const [hover3, onHover3] = useState(false)


  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className='tabBar'
      transition={false}
      justify
    >
      <Tab 
        eventKey={1} 
        title={
          <div 
            onMouseEnter={()=>{
              onHover1(true);
            }}
            onMouseLeave={()=>{
              onHover1(false);
            }}
            style={{color: hover1? 'green':'indigo', textDecoration: hover1 ? 'underline' : 'none'}}>
            <b>Daily Web Log</b>
            </div>
        } 
        className='projects'>
        <ProjectPage project={dailyWebLog}/>
      </Tab>
      <Tab 
      eventKey={2} 
      title={
        <div 
          onMouseEnter={()=>{
            onHover2(true);
          }}
          onMouseLeave={()=>{
            onHover2(false);
          }}
          style={{color: hover2? 'green':'indigo', textDecoration: hover2 ? 'underline' : 'none'}}>
          <b>Gogh On</b>
          </div>
      } 
        className='projects'>
      <ProjectPage project={goghOn}/>
      </Tab>
      <Tab eventKey={3} 
      title={
        <div 
          onMouseEnter={()=>{
            onHover3(true);
          }}
          onMouseLeave={()=>{
            onHover3(false);
          }}
          style={{color: hover3? 'green':'indigo', textDecoration: hover3 ? 'underline' : 'none'}}>
          <b>Portfolio</b>
          </div>
      } 
      className='projects'>
      <ProjectPage project={portfolio}/>
      </Tab>
    
    </Tabs>
  );
}

export default ProjectsTabs;