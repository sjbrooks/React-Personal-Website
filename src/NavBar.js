import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import logo from "./SJB.png";
import './NavBar.css';

function NavBar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="NavBar" color="dark" dark expand="md">
        <NavbarBrand className="NavBar-brand" href="/"><img src={logo} alt="NavBar brand"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="NavBar-nav ml-auto " navbar>
            <NavItem className="Navbar-item">
              <NavLink className="NavBar-link" href="/about/">About</NavLink>
            </NavItem>
            <NavItem className="Navbar-item">
              <NavLink className="NavBar-link" href="/projects/">Projects</NavLink>
            </NavItem>
            <NavItem className="Navbar-item">
              <NavLink className="NavBar-link" href="/connect/">Connect</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;