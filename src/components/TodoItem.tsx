// Este componente se encargará de renderizar cada elemento de la lista de tareas.
import { Container, Form, Button } from "react-bootstrap";
import { TodoModal } from "./TodoModal";

interface Todo {
  id: number;
  text: string;
  chequed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  handleChequed: (id: number) => void;
  deleteTodo: (id: number) => void;
  handleShow: (id: number) => void;
  editTodoId: number | null;
  show: boolean;
}

const TodoItem = ({
  todo,
  handleChequed,
  deleteTodo,
  handleShow,
  editTodoId,
  show,
}: TodoItemProps) => {
  return (
    <Container
      key={todo.id}
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
          onClick={() => handleChequed(todo.id)}
        />
        <h5
          style={{
            textDecoration: `${todo.chequed ? "line-through" : "none"} `,
          }}
        >
          {todo.text}
        </h5>
      </div>

      <div className="d-flex justify-content-end gap-2 align-items-center">
        <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
          x
        </Button>
        <Button onClick={() => handleShow(todo.id)}>edit</Button>
        {editTodoId === todo.id && show ? <TodoModal /> : ""}
      </div>
    </Container>
  );
};

export default TodoItem;
