import React, {useState} from "react";
import { EnvelopeAt, Linkedin, Github, Git } from "react-bootstrap-icons";

export const Outro = () =>{

    const [hoverE, onHoverE] = useState(false)
    const [hoverL, onHoverL] = useState(false)
    const [hoverG, onHoverG] = useState(false)


    
    return(
        <div 
        className="outro">
            <br></br>
            <br></br>
            <h1>Thanks for stopping by!</h1>
            <br></br>
            <h2>
           
           <a href ='mailto:amandahenneberry@icloud.com' target="_blank" >
            <EnvelopeAt 
            bsstyle='default'
            onMouseEnter={()=>{
                onHoverE(true);
            }}
            onMouseLeave={()=>{
                onHoverE(false);
            }}
            style={{color: hoverE? 'rgba(3, 24, 4, 0.6)' : 'rgba(255, 255, 0, 0.719)', fontSize: '10vh'}}
            />
            </a>
          &nbsp;&nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/a-henneberry/' target="_blank">
          <Linkedin 
            bsstyle='default'
            onMouseEnter={()=>{
                onHoverL(true);
            }}
            onMouseLeave={()=>{
                onHoverL(false);
            }}
            style={{color: hoverL? 'rgba(3, 24, 4, 0.6)' : 'rgba(255, 255, 0, 0.719)', fontSize: '10vh'}}
          />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href='https://github.com/amandahenneberry' target="_blank">
          <Github 
          bsstyle='default'
          onMouseEnter={()=>{
              onHoverG(true);
          }}
          onMouseLeave={()=>{
              onHoverG(false);
          }}
          style={{color: hoverG? 'rgba(3, 24, 4, 0.6)' : 'rgba(255, 255, 0, 0.719)', fontSize: '10vh'}}
          />
          </a>
          </h2>
        </div>
    )
}