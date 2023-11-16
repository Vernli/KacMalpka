import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { delay, motion } from 'framer-motion';
import Searchbar from './Searchbar';
import ShoppingCart from './ShoppingCart';
import Login from './Login';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-nav text-white font-nav">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./images/logo.png" alt="logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">O nas</Nav.Link>
            <Nav.Link href="#">Nasze Sklepy</Nav.Link>
            <NavDropdown title="Produkty" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Wódka</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Whisky</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Likiery</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action4">Kontakt</Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Searchbar />
            <ShoppingCart />
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
