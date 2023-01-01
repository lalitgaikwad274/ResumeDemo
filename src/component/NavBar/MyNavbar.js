import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNavbar() {
   return (
      <Navbar
         collapseOnSelect
         expand="lg"
         variant="dark"
         sticky="top"
         style={{ backgroundColor: "#6998ab" }}
      >
         <Container className="me-4">
            <div>
               <Navbar.Brand href="#home">Mechions</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
               id="responsive-navbar-nav"
               className="justify-content-end"
            >
               <Nav style={{ gap: 30 }}>
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Services" id="collasible-nav-dropdown">
                     <NavDropdown.Item href="/resumebuilding">
                        Resume Building
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#PMS">
                        Placement Management System
                     </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default MyNavbar;
