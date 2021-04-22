import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { MdCopyright } from 'react-icons/md';

const LukeNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" dark expand="md">
        <NavbarBrand href="/">Luke's Personal Page</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/skills">Skills</NavLink>
            </NavItem>                         
          </Nav>
          <NavbarText><MdCopyright /> 2021 Luca Panariello</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default LukeNav;
