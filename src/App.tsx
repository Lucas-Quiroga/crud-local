import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import TodoContextProvider, { todoContext } from "./context/TodoContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import beachImg from "./assets/beach.jpeg";
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
  editTodo: (id: number) => void;
}

function App() {
  const { todos, handleSubmit, task, setTask, deleteTodo, editTodo } =
    useContext<TodoContextType>(todoContext);

  const [chequed, setChequed] = useState(false);

  return (
    <TodoContextProvider>
      <Container
        className="mt-5 d-flex flex-column justify-content-center mx-auto container_app"
        style={{
          borderRadius: "1rem",
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
              backgroundPosition: "0 60rem",
              height: "35rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="d-flex justify-content-between mt-4">
              <h2>Tasks</h2>
              <Container className="d-flex gap-4 justify-content-end">
                <Button variant="secondary">All</Button>
                <Button variant="secondary">Complete</Button>
                <Button variant="secondary">Active</Button>
              </Container>
            </div>
            <div style={{ marginTop: "auto" }}>
              <Container>
                {todos.map((e) => (
                  <Container
                    key={e.id}
                    className="d-flex justify-content-between mb-2"
                    style={{
                      borderRadius: "1rem",
                      backgroundColor: "white",
                    }}
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <Form.Check
                        aria-label="option 1"
                        type="checkbox"
                        className="circle-checkbox"
                        onClick={() => setChequed(!chequed)}
                      />
                      <h5
                        style={{
                          textDecoration: `${
                            chequed ? "line-through" : "none"
                          } `,
                        }}
                      >
                        {e.text}
                      </h5>
                    </div>

                    <div className="d-flex justify-content-end gap-2 align-items-center">
                      <Button variant="danger" onClick={() => deleteTodo(e.id)}>
                        x
                      </Button>
                      <Button onClick={handleShow}>edit</Button>
                    </div>
                  </Container>
                ))}
                <br />
                <Form onSubmit={handleSubmit}>
                  <InputGroup className="mb-3 gap-2">
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
      {show && (
        <>
          <Modal show={show} onHide={handleClose} backdrop="static" centered>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Change taskt</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="todo"
                    autoFocus
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              //PASERLA EL ID
              <Button variant="primary" onClick={editTodo}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </TodoContextProvider>
  );
}

export default App;
