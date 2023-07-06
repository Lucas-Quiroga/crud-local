//renderizara el input
import { useContext } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { todoContext } from "../context/TodoContext";

const TodoInput = () => {
  const { handleSubmit, task, setTask } = useContext(todoContext);

  return (
    <div className="input-container">
      <Form
        onSubmit={handleSubmit}
        style={{
          position: "relative",
          maxHeight: "300px",
          overflowY: "auto",
        }}
      >
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
    </div>
  );
};

export default TodoInput;
