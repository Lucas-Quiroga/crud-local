import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginAuth0 from "./LoginAuth0";
import LogoutAuth0 from "./LogoutAuth0";
import icon from "../assets/iconApp.png";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          <img src={icon} alt="icon-app" width={"100rem"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="justify-content-end">
            <Nav.Link>
              {isAuthenticated ? <LogoutAuth0 /> : <LoginAuth0 />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
