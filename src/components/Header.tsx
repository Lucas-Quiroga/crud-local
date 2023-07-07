//Este componente se encargará de renderizar el encabezado con los botones "All", "Complete" y "Active".
import { NavLink, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function Header() {
  return (
    <div className="d-flex justify-content-between mt-4">
      <h2 color="white">TASKS</h2>
      <nav>
        {" "}
        <Container className="d-flex gap-4 justify-content-end">
          <NavLink to="/">
            <Button
              style={{ background: "rgba(36, 36, 36, 0.7)", border: "none" }}
            >
              All
            </Button>
          </NavLink>
          <NavLink to="/complete">
            <Button
              style={{ background: "rgba(36, 36, 36, 0.7)", border: "none" }}
            >
              Complete
            </Button>
          </NavLink>
          <NavLink to="/active">
            <Button
              style={{ background: "rgba(36, 36, 36, 0.7)", border: "none" }}
            >
              Active
            </Button>
          </NavLink>
        </Container>
      </nav>
    </div>
  );
}

export default Header;
