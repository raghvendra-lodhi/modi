import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './LastFooter.css';
const LastFooter = () => {
  return (
    <div id='lastdiv'>
        <Container id='lascon'>
            <Row>
                <Col>
        <span>

        © 2018 <span id='fcolor'>modimarijuana.com </span>made with by youwes,all right reserved. </span>
                
            </Col>
            
            <Col>
            <span>
            Contact Us | Term Of Use | Site Map |    Privacy Policy </span>
            </Col>

        </Row>
        </Container>
    </div>
  )
}

export default LastFooter;