import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function AigNavbar() {
    return (
    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand fixed='top' href="#home">
          <Nav.Link href="/">
            <img
              src="../images/logo.png"
              width="110"

              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Nav.Link>
          </Navbar.Brand>

          <Nav>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/recruitment">Recruitment</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

        </Container>
      </Navbar>

    
        );
};
