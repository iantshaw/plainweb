import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function AigNavbar() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand fixed='top'>
          <Nav.Link href="/">
            <img
              src="../images/logo.png"
              width="110"

              className="d-inline-block align-top"
              alt="Aigence"
            />
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/recruitment">Recruitment</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
};
