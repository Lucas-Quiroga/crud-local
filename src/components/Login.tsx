import { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { usersContext } from "../context/UserContext";

const Login = () => {
  const { users, setActiveSession } = useContext(usersContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const findUser = users.find((userIndex) => userIndex.email === email);

    if (findUser && findUser.password === password) {
      setActiveSession(true);
    } else {
      setActiveSession(false);
      return alert("no encontrado o datos incorrectos");
    }
  };

  return (
    <Container style={{ backgroundColor: " #e0ded8 " }}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmitLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mx-1">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
