import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">Invest</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#invest">Simuliere</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/leonberkemeier/GDPAbgabeExtra">code .</Nav.Link>
            <Nav.Link eventKey={2} href="https://www.instagram.com/leonberkemeier/">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;