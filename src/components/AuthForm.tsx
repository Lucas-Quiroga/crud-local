import { Container, Row, Button } from "react-bootstrap";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthForm = () => {
  const [activeComponent, setActiveComponent] = useState(false);

  function toggleComponent() {
    setActiveComponent(!activeComponent);
  }

  return (
    <Container className="d-flex flex-column justify-content-center mx-auto vh-100">
      <Row
        style={{
          borderRadius: "1rem",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
        className="d-flex justify-content-center mb-2"
      >
        {activeComponent ? <Login /> : <Register />}
      </Row>
      <Button variant="secondary" onClick={toggleComponent} className="mt-3">
        {activeComponent ? "Register" : "Login"}
      </Button>
    </Container>
  );
};

export default AuthForm;
