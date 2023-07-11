import { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { usersContext } from "../context/UserContext";

interface Users {
  id: number | string;
  email: string;
  password: string;
}

const Register = () => {
  const { users, setUsers } = useContext(usersContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      const newUser: Users = {
        id: Math.random(),
        email: email,
        password: password,
      };

      setUsers([...users, newUser]);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container style={{ backgroundColor: " #e0ded8 " }}>
      <h1>Register</h1>
      <Form onSubmit={handleSubmitRegister}>
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

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
