import React from 'react'
import { Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import './Nav.css';
import logo from '../img/logo.png';
function Navigation() {
  return (
   <>
    <Navbar expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="150"
              height="70"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#home">SHOP</Nav.Link>
            <Nav.Link href="#home">BLOG</Nav.Link>
            <Nav.Link href="#link">ABOUT US</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
            <Nav.Link href="#link">$0.00</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>

  )
}

export default Navigation