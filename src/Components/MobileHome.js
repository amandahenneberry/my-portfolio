import React, { useState, useContext, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Open from "./Open";
import { XSquareFill} from "react-bootstrap-icons";


function ContextAwareToggle({ children, eventKey, callback}) {
  const { activeEventKey } = useContext(AccordionContext);
  const [hoverX, onHoverX] = useState(false)

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
      <>
      {isCurrentEventKey ? (
        <>
        <Button
        type="button"
        id="openButton"
        style={{ backgroundColor: isCurrentEventKey ? 'transparent' : 'transparent',  outline: 'none', borderColor:'transparent', color: isCurrentEventKey ? 'white' : 'blue', borderWidth: '4px'}}
        onClick={decoratedOnClick}
      > <b>Open</b>
      {children}
      </Button> 

      </>
      ):(
        <>
        <Button
        onMouseEnter={()=>{
          onHoverX(true);
        }}
        onMouseLeave={()=>{
          onHoverX(false);
        }}
        type="button"
        style={{ backgroundColor: hoverX ? 'rgba(14, 15, 14, 0.4)' : 'rgba(14, 15, 14, 0.15)', outline: 'none', borderColor:'transparent', color: hoverX ? 'rgba(20, 0, 20, 0.717)' : 'rgba(3, 24, 4, 0.85)', }}
        onClick={decoratedOnClick}
      > <b><XSquareFill/></b>
      </Button>
        <Open />
        </>
      )}
      
        
    </>
  )
}
  
  function MobileHome() {
    return (
      <>
      
          <Accordion flush defaultActiveKey="0">
          <Card bsstyle='default' style={{outline: 'none', backgroundColor: 'transparent', height:'100%', padding: '0px 5x 0px 5px'}}>
            <Accordion.Collapse eventKey="0">
              <Card.Body className ='mobileHome' id='homeBody'>
                <Container>
                  
                  <h1 className="textHomeWelcome">
                    {/* <span className='hello' id='h'>H</span> */}
                    <span id='w'>W</span>
                    <span id='e'>e</span>
                    <span id='l'>l</span>
                    <span id='c'>c</span>
                    <span id='o'>o</span>
                    <span id='m'>m</span>
                    <span id='ee'>e</span>
                    <span className="textHomeTomy">
                      &nbsp;
                      <span id='to'>to</span>
                      &nbsp;
                       <span id='my'>my </span>
                       <span style={{color: 'transparent', fontSize: '5vh'}} id='lineA'>&#124;</span>
                    </span>
                  </h1>
                  
                <h2 id="webDev">Web Dev <br></br></h2>
                <h1 className="textHomePortfolio" id='portfolio'> <span style={{color: 'transparent', fontSize: '4vh'}} id='lineB'>&#124;</span> Portfolio  <span style={{color: 'transparent', fontSize: '4vh'}} id='lineB'>&#124;</span></h1>
                </Container>
              
              </Card.Body>
            </Accordion.Collapse>
            <Card.Footer style={{ borderColor:'transparent', outline: 'none', marginBottom:"10px"}}>
                <ContextAwareToggle eventKey="0"></ContextAwareToggle>
            </Card.Footer>
            </Card>
        </Accordion>
        
      </>
    );

  }

export default MobileHome;