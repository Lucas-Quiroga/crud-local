// Este componente se encargará de renderizar cada elemento de la lista de tareas.
import { Container, Form, Button } from "react-bootstrap";
import { TodoModal } from "./TodoModal";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

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
  isChecked: boolean;
}

const TodoItem = ({
  todo,
  handleChequed,
  deleteTodo,
  handleShow,
  editTodoId,
  show,
  isChecked,
}: TodoItemProps) => {
  return (
    <Container
      key={todo.id}
      className="d-flex justify-content-between mb-1"
      style={{
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <div className="d-flex gap-3 align-items-center justify-content-center">
        <Form.Check
          aria-label="option 1"
          type="checkbox"
          checked={isChecked}
          className="circle-checkbox mb-1"
          onChange={() => handleChequed(todo.id)}
        />
        <h5
          style={{
            textDecoration: `${todo.chequed ? "line-through" : "none"} `,
            fontFamily: "sans-serif",
          }}
        >
          {todo.text}
        </h5>
      </div>

      <div className="d-flex justify-content-end gap-2 align-items-center">
        <Button onClick={() => handleShow(todo.id)}>
          <BiEdit />
        </Button>
        <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
          <BsFillTrash3Fill />
        </Button>
        {editTodoId === todo.id && show ? <TodoModal /> : ""}
      </div>
    </Container>
  );
};

export default TodoItem;
