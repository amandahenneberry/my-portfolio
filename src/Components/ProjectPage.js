import React, {useState, useEffect} from 'react'
import { Github, BoxArrowUpRight, Prescription } from 'react-bootstrap-icons'
// import { Prev } from 'react-bootstrap/esm/PageItem'
import { Gallery } from './Gallery';
import { Features } from  './Features';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export const ProjectPage = ({project}) =>{
    const [hoverLink, onHoverLink] = useState(false)
    const [hoverGit, onHoverGit] = useState(false)

    return(
        <>
            {project.title !== 'Web Developer Portfolio' ? (
                <>
                <center><h2>{project.title}</h2></center>
            <br></br>

            <Container>
                <center>
            <h4 style={{color:'lightYellow'}}>{project.blurb}</h4>
            <br></br>
            <h5>{project.blurb2}</h5>
            </center>
            <br></br>
                <Row>
                    <Col>
                    <Gallery project={project}/>
                    <div style={{color: 'lightYellow'}}>
                        <center>
                        <small>{project.info}</small>
                        </center>
                    </div>
                 
                    </Col>
                    <Col>
                    <Features project={project}/>
                    </Col>
                </Row>
                <br></br>
                <center>
                <h4 style={{paddingRight: '100px'}}> 
                    Check it out: &nbsp;
                <a target="_blank" href={project.site}
                 onMouseEnter={()=>{
                    onHoverLink(true);
                }}
                onMouseLeave={()=>{
                    onHoverLink(false);
                }}
                style={{color: hoverLink? 'indigo': 'yellowGreen', fontSize: '5vh'}}>
                <BoxArrowUpRight />
                </a>
                &emsp;
                &emsp;
                Code: &nbsp; 
                <a target="_blank" href={project.github} 
            onMouseEnter={()=>{
                onHoverGit(true);
            }}
            onMouseLeave={()=>{
                onHoverGit(false);
            }}
            style={{color: hoverGit ? 'indigo': 'yellowGreen', fontSize: '6vh'}}
            ><Github />
            </a>
                
            </h4>
            </center>
            </Container>
                </>

            ):(
                <>
                <br></br>
                 <Gallery project={project}/>
                 <center>
                    <br></br>
                    <h5>This SPA was built using ReactJS, React-Bootstrap, and CSS animations.</h5>
                    <h6 style={{color: 'lightYellow'}}>Deployed through GitHub Pages.</h6>
                    <h4>
                        Code: &nbsp; 
                        <a target="_blank" href={project.github} 
                            onMouseEnter={()=>{
                            onHoverGit(true);
                            }}
                            onMouseLeave={()=>{
                            onHoverGit(false);
                            }}
                            style={{color: hoverGit ? 'indigo': 'yellowGreen', fontSize: '6vh'}}
                        >
                            <Github />
                        </a>
                    </h4>
                 </center>
                </>

            )}
            
  
        </>
    )
}