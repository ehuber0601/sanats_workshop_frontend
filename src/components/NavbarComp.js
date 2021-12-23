import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

const NavbarComp = () => {
    return (
        <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="/">Santa's Workshop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavbarComp