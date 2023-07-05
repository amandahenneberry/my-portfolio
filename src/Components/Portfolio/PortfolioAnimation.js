import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function PortfolioAnimation() {
    return(
        <>
            <Card bsstyle='default' className='bgMini' style={{outline: 'none', backgroundColor: 'transparent', height:'100%', width:'60%', padding: '0px 10x 0px 10px'}}>
            <Card.Body className ='homeMini' id='homeBody'>
                <Container >
                  <br></br>
                  <h1 className="textHomeWelcomeMini">
                    <span id='w'>W</span>
                    <span id='e'>e</span>
                    <span id='l'>l</span>
                    <span id='c'>c</span>
                    <span id='o'>o</span>
                    <span id='m'>m</span>
                    <span id='ee'>e</span>
                    <span className="textHomeTomyMini">
                      &nbsp;
                      <span id='to'>to</span>
                      &nbsp;
                       <span id='my'>my </span>
                       <span style={{color: 'transparent', fontSize: '2.5vh'}} id='lineA'>&#124;</span>
                    </span>
                  </h1>
                  
                <h2 id="webDevMini">Web Dev <br></br></h2>
                <h1 className="textHomePortfolioMini" id='portfolio'> 
                    <span style={{color: 'transparent', fontSize: '2.5vh'}} 
                        id='lineB'>&#124;
                    </span> 
                    Portfolio  
                    <span style={{color: 'transparent', fontSize: '2.5vh'}} id='lineB'>&#124;
                    </span>
                    </h1>
                  <br></br>
                </Container>
              </Card.Body>
            </Card>

        </>
    )
}

export default PortfolioAnimation;