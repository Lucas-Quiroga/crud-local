//Este componente se encargará de renderizar el modal para editar una tarea.
import { Modal, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { todoContext } from "../context/TodoContext";

export const TodoModal = () => {
  const { editTodo, show, handleClose, setEditTask, editTodoId } =
    useContext(todoContext);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(editTodoId, e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      editTodo(editTodoId, e);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new task name"
                autoFocus
                onChange={(e) => setEditTask(e.target.value)}
                onKeyDown={handleKeyDown}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => editTodo(editTodoId, e)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
