import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginAuth0 from "./LoginAuth0";
import LogoutAuth0 from "./LogoutAuth0";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          TODO-APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="justify-content-end">
            <Nav.Link>
              <LoginAuth0 />
            </Nav.Link>
            <Nav.Link>
              <LogoutAuth0 />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
