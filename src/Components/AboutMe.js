import React, { useState } from "react";
import { KeyboardFill, Hammer, EnvelopeAt, Linkedin } from "react-bootstrap-icons";

export const AboutMe = () =>{
  const [hoverE, onHoverE] = useState(false)
  const [hoverL, onHoverL] = useState(false)

    return(
        <div>
            <center>
              <br></br>
            <h3 style={{color:'rgb(7, 51, 7)'}}>Hi! I'm Amanda.</h3>
            <h5 style={{color:'lightSlateGrey'}}><KeyboardFill style={{fontSize: '30px', color:'rgba(20, 0, 20, 0.6)'}}/>&nbsp;&nbsp;Full Stack Web Developer &nbsp;<Hammer  style={{color: 'rgba(3, 24, 4, 0.6)'}}/></h5>
            </center>
            <div>
             
            <img src={require("../portfolio_pic.jpg")} width={'200px'} height={'200px'} alt="Amanda" style={{ margin:'10px', objectFit: 'contain', borderRadius: '50%', float:'right', marginRight:'30px' }}/>

              <p style={{margin: '40px'}}>  
            
                &emsp; &emsp; My interest in software and web development began in 2018, while pursuing an MFA in Integrated Media Arts at Hunter College. I grew an appreciation for well-desgined interfaces, and cognizance of the ever-expanding relevance of digital technology on everyday life.
                <br></br>
                <br></br>
                &emsp; &emsp;From 2019-2020, I instructed a high school computer science course in Harlem, NYC. Upon research of professional tech education alternatives with my students, I began considering an alternative program for myself!
                <br/><br/> 
                &emsp; &emsp;In 2021, I was accepted into the Grace Hopper Program at Fullstack Academy; I graduated in 2022 with a certificate in full-stack web development.  Since earning my certificate, I’ve continued practicing and educating myself through books, web docs, hands-on practice, and various courses on Code Academy.
                <br></br><br></br>As a Web Developer, I strive to create intuitive, user-focused experiences that bring ease (and potential excitement!) to digital tasks through continuous research and optimization of my codes. 
              
                  <br/><br/>My technical skills include <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>,  <b>React</b>, <b>Redux</b>, <b>Axios</b>, <b>Express</b>, <b>Sequelize</b>, <b>Node</b>, and more! 

                  <br/><br/>When I’m not practicing my coding, I’m working with high school students or teaching painting classes at Central Park.
                  <center>
                  <br/><br/> 
                  <h5>
                  For more information, or to request my resume, please contact me! 
                  &nbsp;&nbsp;
                    <a href ='mailto:amandahenneberry@icloud.com' target="_blank" 
                    onMouseEnter={()=>{
                      onHoverE(true);
                  }}
                  onMouseLeave={()=>{
                      onHoverE(false);
                  }}
                    style={{color: hoverE? 'yellowGreen':'darkGreen'}}><EnvelopeAt /></a>
                    &nbsp; &nbsp;
                    <a href='https://www.linkedin.com/in/a-henneberry/' target="_blank" 
                    onMouseEnter={()=>{
                      onHoverL(true);
                  }}
                  onMouseLeave={()=>{
                      onHoverL(false);
                  }}
                    style={{color: hoverL? 'yellowGreen':'darkGreen'}}><Linkedin /></a>
                  </h5>
                </center>
              </p>
            </div>
        </div>

    )
}