import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavbarBrand, Container, Nav } from 'reactstrap';

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
      <NavbarBrand href="/">My teams</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-danger">Add User</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}
