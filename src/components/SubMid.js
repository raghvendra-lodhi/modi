import React from 'react'
import './SubMid.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leaf3 from '../img/leaf3.png'
import leaf4 from '../img/leaf4.png'

const SubMid = () => {
  return (

<div id='submidm'>

<span id='midh'>  <span>We Are</span> <b>Organic Framfood</b></span>
        <span id='midh1'> <hr id='hr1'/>FEATURES NATURIX FARMFOOD<hr id='hr2'/></span>  
        
        <div id='mids'></div>

       <Container>
      <Row id='midaline'>

        <Col>
             
      <Container>
        <Row>
          <Col>
          <p>Premium Quality<br/><hr id='hrline'/></p>
          <span id='hrline2'>Lorem ipsum dolor sit amet. consectuer adipicing elit, seed diam nonummy</span><br/>
          </Col>
          <Col><img src={leaf4} alt='leaf3'></img></Col>

        </Row>

        <Row>
        <Col><p>Always Fresh<br/><hr id='hrline'/></p>
          <span id='hrline2'>Lorem ipsum dolor sit amet. consectuer adipicing elit, seed diam nonummy</span><br/>
          </Col>
          <Col><img src={leaf4} alt='leaf3'></img></Col>

        </Row>

        <Row>

        <Col>
        <p>100% Natual<br/><hr id='hrline'/></p>
          <span id='hrline2'>Lorem ipsum dolor sit amet. consectuer adipicing elit, seed diam nonummy</span><br/>
        </Col>
          <Col><img src={leaf4} alt='leaf3'></img></Col>

        </Row>
      </Container>


        </Col>


        <Col>
        <figure>
          <figcaption><span id='col2'> Organic</span> <sub id='sub1'>100% Guarantee</sub>
        <img src={leaf3} alt='leaf3'></img></figcaption>
        </figure>
        </Col>


        <Col>
        
        <Container>
        <Row>
          
          <Col><img src={leaf4} alt='leaf3'></img></Col>
          <Col><p>Premium Quality<br/><hr id='hrline'/></p>
          <span span id='hrline2'>Lorem ipsum dolor sit amet. consectuer adipicing elit, seed diam nonummy</span><br/>
          </Col>

        </Row>

        <Row>
        
          <Col><img src={leaf4} alt='leaf3'></img></Col>
          <Col><p>Super Healty<br/><hr id='hrline'/></p>
          <span span id='hrline2'>Lorem ipsum dolor sit amet. consectuer adipicing elit, seed diam nonummy</span><br/>
          </Col>
        </Row>

        <Row>

        <Col><img src={leaf4} alt='leaf3'></img></Col>
          <Col><p>Best Quality<br/><hr id='hrline'/></p>
          <span span id='hrline2'>Lorem ipsum dolor sit amet. consectuer adipicing elit, seed diam nonummy</span>
          </Col>
          
        </Row>
      </Container>

  
        </Col>

      </Row>
    </Container>





</div>




  )
}

export default SubMid