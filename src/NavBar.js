import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

import logo from "./SJB.png";
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md">
        <NavLink exact to="/" className="navbar-brand">
          <img src={logo} alt="NavBar brand" />
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/about">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects">PROJECTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/connect">CONNECT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;