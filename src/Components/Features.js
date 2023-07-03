import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export const Features = ({project}) =>{

    return (
        <div>
          
            {project.title !== 'Daily Web Log' ? (
                <div>
                {project.title === 'Gogh On' ? (
                    <Col>
                        <Tabs
                            defaultActiveKey="features"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            justify
                            >
                            
                            <Tab eventKey="features" title={<div style={{color: 'indigo'}}><h6>Features:</h6></div>}>
                            <Col style={{paddingRight: '40%'}}>
                                <ul className="lists">
                                        <li>generate an avatar</li>
                                        <li>create a room</li>
                                        <li>generate a link to the room (to copy/paste to friends)</li>
                                        <li>chat with users in your room (while you wait for everyone to join)</li>
                                        <li>START a session where you can draw and chat with friends</li>
                                        <li>When you're done: END your session by pressing 'end session' in your drawing toolbox, SAVE your piece to your computer, OR scrap it and start a new session!</li>
                                    
                                        
                                </ul>
                               
                                <br></br>
                                </Col>
                                
                            </Tab>
                            
                            <Tab eventKey="tech" title={<div style={{color: 'indigo'}}><h6>Tech:</h6></div>}>
                               
                                <Col style={{paddingLeft: '50%'}}>
                                <ul className="lists">
                                    <div>
                                        <li>React</li>
                                        <li>Socket.io</li>
                                        <li>Axios</li>
                                        <li>Bootstrap & React-Bootstrap</li>
                                        <li>React-Konva</li>
                                        <li>deployed through Heroku</li>
                                    </div>
                                </ul>
                                </Col>
                            </Tab>
                        </Tabs>
                    </Col>

                ) : (

                    <div>
                    ...loading
                    </div>
                )}
                </div>
            ) : (

                <Col>
                    <Tabs
                        defaultActiveKey="features"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="features" title={<div style={{color: 'indigo'}}><h6>Features:</h6></div>}>
                            <Col style={{paddingRight: '40%'}}>
                                <ul className="lists">
                                   
                                        <li>multi-media web journal</li>
                                        <li>editable 'to-do' list</li>
                                        <li>user dashboard displays current date, time, and weather for the user's geographic location</li>
                                        <li>username & password</li>
                                        <li>each journal entry can accept and display a user-uploaded photo (optional)</li>
                                        <li>each journal entry automatically saves the date, location, and weather; when users view their old entries, they'll see where they were and what the weather was like!</li>
                                    
                                </ul>
                                <br></br>
                            </Col>
                    </Tab>
                    <Tab eventKey="tech" title={<div style={{color: 'indigo'}}><h6>Tech:</h6></div>}>
                        <Col style={{paddingLeft: '50%'}}>
                            <ul className="lists">
                                <div>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Express</li>
                                    <li>Axios</li>
                                    <li>Bootstrap & React-Bootstrap</li>
                                    <li>Howler</li>
                                    <li>Sequelize</li>
                                    <li>PostgreSQL</li>
                                    <li>OpenWeatherMap API</li>
                                    <li>Cloudinary (for sound and image hosting)</li>
                                    <li>deployed through Heroku</li>
                                </div>
                            </ul>
                        </Col>
                    </Tab>
      
                    </Tabs>
                    
              
                
                </Col>

                
            ) 
        }

        </div>
    )
}