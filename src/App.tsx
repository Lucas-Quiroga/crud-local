import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import TodoContextProvider, { todoContext } from "./context/TodoContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import beachImg from "./assets/beach.jpeg";
import Card from "react-bootstrap/Card";
import "./App.css";

interface Todo {
  id: number;
  text: string;
}

interface TodoContextType {
  todos: Todo[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteTodo: (id: number) => void;
  task: string;
  setTask: (task: string) => void;
}

function App() {
  const { todos, handleSubmit, task, setTask } =
    useContext<TodoContextType>(todoContext);

  return (
    <TodoContextProvider>
      <Container
        className="mt-5 "
        style={{
          borderRadius: "5%",
          border: "1px solid black",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Row>
          <Col lg={2} style={{ backgroundColor: "lightblue" }}>
            <div className="d-flex gap-3 ball_container mt-2">
              <div className="ball" style={{ backgroundColor: "red" }}></div>
              <div className="ball" style={{ backgroundColor: "orange" }}></div>
              <div className="ball" style={{ backgroundColor: "green" }}></div>
            </div>
            INFO DEL USER
          </Col>
          <Col
            lg={10}
            style={{
              backgroundImage: `url(${beachImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2>Tasks</h2>
              <Container className="d-flex gap-4">
                <Button variant="secondary">All</Button>
                <Button variant="secondary">Complete</Button>
                <Button variant="secondary">Active</Button>
              </Container>
            </div>
            <div style={{ marginTop: "auto" }}>
              <Container>
                {todos.map((e) => (
                  <Card
                    key={e.id}
                    style={{
                      maxWidth: "100%",
                      height: "5rem", // ajusta la altura de la tarjeta
                    }}
                  >
                    <Card.Header as="h5">{e.text}</Card.Header>
                    <Card.Body>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                ))}
                <br />
                <Form onSubmit={handleSubmit}>
                  <InputGroup className="mb-3">
                    <Button style={{ borderRadius: "50%" }} type="submit">
                      +
                    </Button>
                    <Form.Control
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setTask(e.target.value)}
                      value={task}
                    />
                  </InputGroup>
                </Form>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </TodoContextProvider>
  );
}

export default App;
