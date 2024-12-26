import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';


function UserNavbar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">MyWebsite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Main Menu</Nav.Link>
         
        </Nav>
        <Nav>
          <Nav.Link href="/favorites">
            <button className='btn btn-outline-primary'>
              <FaHeart />
            </button>
          </Nav.Link>
          <Nav.Link href="/basket">
            <button className='btn btn-outline-danger'>
              <FaShoppingCart /> 
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default UserNavbar
