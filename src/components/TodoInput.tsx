//renderizara el input
import { useContext } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { todoContext } from "../context/TodoContext";
import "./../styles/TodoInput.css";

const TodoInput = () => {
  const { handleSubmit, task, setTask } = useContext(todoContext);

  return (
    <div className="input-container mb-2">
      <Form
        onSubmit={handleSubmit}
        style={{
          position: "relative",
          maxHeight: "300px",
          overflowY: "auto",
        }}
        className="MyComponent"
      >
        <InputGroup className="mb-3 gap-2 d-flex flex-row-reverse MyComponent">
          <Button
            style={{
              borderRadius: "50%",
              background: "rgba(36, 36, 36, 0.7)",
            }}
            type="submit"
          >
            +
          </Button>
          <Form.Control
            placeholder="Add a Task"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={(e) => setTask(e.target.value)}
            style={{
              color: "white",
              background: "rgba(36, 36, 36, 0.7)",
            }}
            value={task}
          />
        </InputGroup>
      </Form>
    </div>
  );
};

export default TodoInput;
