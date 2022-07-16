import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Fslider.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sliderp from '../img/sliderp.jpg';


export default class Fslider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="scolor">
        <h1 id="sliderh"> Out TOP solution that will save your time<br/> and take you toward the freedom:</h1>
        <Slider {...settings}>
          <div>

            <Container id="slispace"> 
              <Row>
                <Col>
            <p>Product Finding</p>
            <p>Find Winning Product</p>
            <span>Leave your work behind with the most advanced <br/>All-in-one eBay dropshipping tool that will do for you <br/> everthing from product finding, price & Stock <br/> monitoring, customer support managment advanced <br/></span>
            </Col>


            <Col>
            <img id="imgslider" src={sliderp} alt='leaf3'></img>
            </Col>
            </Row>
            </Container>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}