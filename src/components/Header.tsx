//Este componente se encargará de renderizar el encabezado con los botones "All", "Complete" y "Active".

import { Container, Button } from "react-bootstrap";

function Header() {
  return (
    <div className="d-flex justify-content-between mt-4">
      <h2>Tasks</h2>
      <Container className="d-flex gap-4 justify-content-end">
        <Button variant="secondary">All</Button>
        <Button variant="secondary">Complete</Button>
        <Button variant="secondary">Active</Button>
      </Container>
    </div>
  );
}

export default Header;
