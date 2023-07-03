import React, { useState, useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { KeyboardFill, Hammer, EnvelopeAt, Linkedin } from "react-bootstrap-icons";
import Projects from "./Projects";
import { AboutMe } from "./AboutMe";
import { Outro } from "./Outro";



function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className="aboutButton"
      style={{ backgroundColor: isCurrentEventKey ? 'rgba(31, 10, 31, 0.5)' : 'yellow', color: isCurrentEventKey ? 'yellowGreen' : 'indigo', borderWidth:  isCurrentEventKey ? '0px' : '2px', borderColor: 'yellow'}}
      onClick={()=>{decoratedOnClick()}}
    >
      {children}
    </button>
  );
}

function Open() {
  return (
    <div>
    <Accordion flush defaultActiveKey="1">
      <Card bsstyle='default' style={{outline: 'none', backgroundColor: 'transparent', height:'100%', padding: '0px 10x 0px 10px', zIndex:1}}>
        <Card.Header style={{ backgroundColor: 'rgba(3, 24, 4, 0.6)'}}>
          <ContextAwareToggle eventKey="1" ><b>About Me</b></ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="aboutMe">
              <AboutMe />
            </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card bsstyle='default' style={{outline: 'none', backgroundColor: 'transparent', height:'100%', padding: '0px 10x 0px 10px', zIndex:1}}>
        <Card.Header style={{ backgroundColor: 'rgba(3, 24, 4, 0.6)'}}>
          <ContextAwareToggle eventKey="2"><b>Projects</b></ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body >
            <Projects />
            </Card.Body>
           
        </Accordion.Collapse>
      </Card>
    </Accordion>
    
    <div className='under'>
      <center>
      <Outro />
      </center>
    </div>
    </div>
  );
}


export default Open;