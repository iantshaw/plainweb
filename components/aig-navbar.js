import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function AigNavbar() {
    return (
    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand fixed='top' href="#home">
            <img
              src="../images/logo.png"
              width="110"

              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Nav>
          <Nav.Link href="#deets">About Us</Nav.Link>
          <Nav.Link href="#deets">Recruitment</Nav.Link>
          <Nav.Link href="#deets">Contact</Nav.Link>
          </Nav>

        </Container>
      </Navbar>

    
        );
};
