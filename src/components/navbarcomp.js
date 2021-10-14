import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function navcomp() {
  return (
    <div className="navcomp">
      <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="#home"><img
        src="/logo.svg"
        width="70"
        height="28"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#blog">Blog</ReactBootStrap.Nav.Link>
      
      <ReactBootStrap.Nav.Link href="#service">Services</ReactBootStrap.Nav.Link>
     {/* <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
  </ReactBootStrap.NavDropdown> */}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Link href="#about">About Us</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#contact">Contact</ReactBootStrap.Nav.Link> 
   
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
    </div>
  );
}

export default navcomp;