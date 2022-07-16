import React from 'react'
import './SubFooter.css';
import greenleaf2 from '../img/greenleaf2.png';
import leaf5 from '../img/leaf5.png';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

const SubFooter = () => {
  return (
    <div>
      <div id='subf'>
        
          <Row>
            <Col>
        <img id='img1' src={greenleaf2} alt='leaf3'></img>    
            </Col>

            <Col id='subf1'>
            <span>JOIN OUR NEWSLETTER</span><br/><span id='spb'>Subscribe Newsletter</span>
            </Col>
            <Col id='subf2'>
            <Button id='button11' size="lg" variant="outline-secondary" >
        <span id='bnameb'>Enter your e-mail</span>
      </Button>
      
            </Col>
            
            <Col id='subf2'>
            <Button id='button12' size="lg" variant="outline-success" >
        <span id='bnameb'>Subscribe</span>
      </Button>

            </Col>
            <Col>
            </Col>
            <img id='img1' src={leaf5} alt='leaf3'></img>    
          </Row>

        
        </div>







        
        
        
    </div>
  )
}

export default SubFooter