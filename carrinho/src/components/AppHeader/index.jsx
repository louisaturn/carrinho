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

import { Link } from 'react-router-dom'
import { useCart } from '../../context/Cart';

function AppHeader(args) {
  const [isOpen, setIsOpen] = useState(false);
  const {cart} = useCart();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' expand="md" dark>
        <NavbarBrand href="/">NewYou</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink href="https://github.com/reactstrap/reactstrap">
                Seu carrinho
              </NavLink> */}
              <Link className='nav-link d-flex' to="/your-cart">Seu carrinho
              <div className='rounded-pill px-2 bg-danger ms-1 text-white'>{cart.length}</div>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppHeader;