import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import logo from '../img/logo.png';
import gallery from '../img/gallery.jpg';
import gallery2 from '../img/gallery2.jpg';
import gallery3 from '../img/gallery3.jpg';
import gallery5 from '../img/gallery5.jpg';
import gallery4 from '../img/gallery4.jpg';
import gallery6 from '../img/gallery6.jpg';


const Footer = () => {
  return (
    <div id='bodyc'>
        
    <Container >
      <Row>

        <Col>
<img id='imgf1' src={logo} alt='favicon' width={140}></img><br/><br/>
<p id='footp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore manga</p><br/>

<p id='footp'> 125/2 single streen Road, Califoriya united state</p>
<p id='footp'>www.modimarijuana.com</p>
<p id='footp'>contact@modimarijuana.com</p>



        </Col>



        <Col><div id='co-1'>
<span id='info1'>Information</span><br/><br/>
<p id='footp'><span id='arro1'>></span>About Our Shop</p><br/>
<p id='footp'><span id='arro1'>></span>Top Sellers</p><br/>
<p id='footp'><span id='arro1'>></span>Our Blog</p><br/>
<p id='footp'><span id='arro1'>></span>New Products</p><br/>
<p id='footp'><span id='arro1'>></span>Secure Shopping</p>

</div>
        </Col>



        <Col>
        <span id='info1'>My Account</span><br/><br/>
<p id='footp'><span id='arro1'>></span>My Account</p><br/>
<p id='footp'><span id='arro1'>></span>Discount</p><br/>
<p id='footp'><span id='arro1'>></span>Personal information</p><br/>
<p id='footp'><span id='arro1'>></span>My Address</p><br/>
<p id='footp'><span id='arro1'>></span>Order History</p><br/>
        </Col>

        <Col>
        <span id='info1'>Photo Instagram</span><br/><br/>
        <table>
          <th><img id='imglen' src={gallery} alt="gallery"></img> </th>

          <th><img id='imglen' src={gallery2} alt="gallery2"></img> </th>

          <th><img id='imglen' src={gallery3} alt="gallery3"></img></th>

          <tr>
        <td><img id='imglen' src={gallery5} alt="gallery5"></img></td>

        <td><img id='imglen' src={gallery4} alt="gallery4"></img></td>

        <td><img id='imglen' src={gallery6} alt="gallery6"></img></td>

        </tr>
       

       
        <tr>
        <td><img id='imglen' src={gallery} alt="gallery"></img></td>
        <td><img id='imglen' src={gallery3} alt="gallery1"></img></td>
        <td><img id='imglen' src={gallery5} alt="gallery5"></img></td>

        </tr>
        </table>
        </Col>
      </Row>
    </Container>


    
    </div>
  )
}

export default Footer