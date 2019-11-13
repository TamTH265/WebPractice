import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import CounterContext from '../contexts/CounterContext';

const NavbarApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <CounterContext.Consumer>
                {(context) => (
                  <NavLink className="active">
                    Total Counter (
                    {context.counters.length}
                    )
                  </NavLink>
                )}
              </CounterContext.Consumer>
            </NavItem>
            <NavItem>
              <CounterContext.Consumer>
                {(context) => (
                  <NavLink className="active">
                    Total Counted Value (
                    {context.counters.reduce((total, counter) => total + counter.value, 0)}
                    )
                  </NavLink>
                )}
              </CounterContext.Consumer>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarApp;
