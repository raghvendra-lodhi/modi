import React from 'react';
import './Mid.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import Button from 'react-bootstrap/esm/Button';
const Mid = () => {
  return (
    
    <div>
        <span id='midh'>  <span>We Are</span> <b>Organic Framfood</b></span>
        <span id='midh1'> <hr id='hr1'/>ABOUT MODI FRAMFOOD<hr id='hr2'/></span>  
        
        <div id='mids'></div>

       <Container>
      <Row id='midaline'>

        <Col>
        <figure>
      <img src={icon1} alt="icon"></img> 
      <figcaption id='midpics'> 
        <p><span id='fgreen'>Fresh From Naturix Farm</span><br/><span id='fgreenl1'>Lorem ipsum dolor, sit amet consectetur<br/> adipisicing elit. Ex, obcaecati necessita</span></p>
        <Button id='button1' size="lg" variant="outline-primary" >
        <span id='bname1'>READ MORE</span>
      </Button>

      </figcaption>

        </figure>
        
        </Col>


        <Col>
        <figure>
      <img src={icon2} alt="icon2"></img> 
      <figcaption id='midpics'> 
        <p><span id='fgreen'>100% Organic Goods</span><br/><span id='fgreenl1'>Lorem ipsum dolor, sit amet consectetur<br/> adipisicing elit. Ex, obcaecati necessita</span></p>
        <Button id='button1' size="lg" variant="outline-primary" >
        <span id='bname1'>READ MORE</span>
      </Button>

      </figcaption>

        </figure>
        
        </Col>


        <Col>
        
        <figure>
      <img src={icon3} alt="icon3"></img> 
      <figcaption id='midpics'> 
        <p><span id='fgreen'>Premium quality</span><br/><span id='fgreenl1'>Lorem ipsum dolor, sit amet consectetur<br/> adipisicing elit. Ex, obcaecati necessita</span></p>
        <Button id='button1' size="lg" variant="outline-primary" >
        <span id='bname1'>READ MORE</span>
      </Button>

      </figcaption>

        </figure>
        
        
        </Col>

      </Row>
    </Container>
         
    </div>
  );
}

export default Mid