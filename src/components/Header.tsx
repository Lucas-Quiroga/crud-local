//Este componente se encargará de renderizar el encabezado con los botones "All", "Complete" y "Active".
import { NavLink, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function Header() {
  return (
    <div className="d-flex justify-content-between mt-4">
      <h2>Tasks</h2>
      <nav>
        {" "}
        <Container className="d-flex gap-4 justify-content-end">
          <NavLink to="/">
            <Button variant="secondary">All</Button>
          </NavLink>
          <NavLink to="/complete">
            <Button variant="secondary">Complete</Button>
          </NavLink>
          <NavLink to="/active">
            <Button variant="secondary">Active</Button>
          </NavLink>
        </Container>
      </nav>
    </div>
  );
}

export default Header;
