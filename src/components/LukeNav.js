import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const LukeNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" dark expand="md">
        <Link className="navbar-brand" to="/">Luca's Portfolio</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/portfolio">Projects</Link>
            </NavItem>
            <NavItem>
              <Link  className="nav-link" to="/skills">Skills</Link>
            </NavItem>    
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default LukeNav;
