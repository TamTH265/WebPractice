import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  NavItem,
  Collapse
} from 'reactstrap';

import { CartContext } from '../contexts/CartProvider';

const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <CartContext.Consumer>
                {
                  ({cartItems}) => <NavLink href="/carts">Carts ({cartItems.length})</NavLink>
                }
              </CartContext.Consumer>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
};

export default TopMenu;
