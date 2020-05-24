/** NavBar: Component that renders the navbar on each page
 *
 * Props: (none)
 *
 * State: isOpen, which identifies whether the toggle menu bar is open
 *
 * Children: reactstrap Navbar components
 */

import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavLink exact to="/" className="navbar-brand">
          <p>SJB</p>
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