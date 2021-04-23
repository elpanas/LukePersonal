import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md';

const LukeNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" dark expand="md">
        <Link className="navbar-brand" to="/">Luke's Personal Page</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link  className="nav-link" to="/skills">Skills</Link>
            </NavItem>                         
          </Nav>
          <NavbarText><MdCopyright /> 2021 Luca Panariello</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default LukeNav;
