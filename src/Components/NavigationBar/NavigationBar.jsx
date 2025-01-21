import React from "react";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";
import './navigationBar.css'
import airplaneLogo from '../../assets/icon/airplane.svg'
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
function NavigationBar() {
  return (
    <Navbar expand="lg" className="position-absolute w-100 z-2">
      <Container>
        <NavbarBrand className="text-light">
          <Link to={'/'} className="d-flex text-decoration-none text-light "  >
          <img src={airplaneLogo} alt="" className="me-2"  />
          React Teravel 
          </Link>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-light" />
<NavbarCollapse id="basic-navbar-nav">
    <Nav className="me-auto w-100 justify-content-center">
    <Nav.Link href="/" className="text-light">Home</Nav.Link>
    <Nav.Link href="/holidays" className="text-light">Holidays</Nav.Link>
    <Nav.Link href="/cityBreaks" className="text-light">CityBreaks</Nav.Link>
    <Nav.Link href="/destinatios" className="text-light">Destinatios</Nav.Link>
    </Nav>


</NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
