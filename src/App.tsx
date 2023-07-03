import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import TodoContext from "./context/TodoContext";
import { todoContext } from "./context/TodoContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
    <TodoContext>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Button style={{ borderRadius: "50%" }} type="submit">
              +
            </Button>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              onChange={(e) => setTask(e.target.value)}
              value={"hola"}
            />
          </InputGroup>
        </Form>

        <br />
        <Container>
          {todos.map((e) => (
            <ul key={e.id}>
              <li>{e.text}</li>
            </ul>
          ))}
        </Container>
        <Container className="d-flex gap-4">
          <Button className="btn-secondary">All</Button>
          <Button className="btn-secondary">Complete</Button>
          <Button className="btn-secondary">Active</Button>
        </Container>
      </Container>
    </TodoContext>
  );
}

export default App;
