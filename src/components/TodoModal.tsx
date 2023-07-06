//Este componente se encargará de renderizar el modal para editar una tarea.
import { Modal, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { todoContext } from "../context/TodoContext";

export const TodoModal = () => {
  const { editTodo, show, handleClose, setEditTask, editTodoId } =
    useContext(todoContext);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
        <Button variant="primary" onClick={() => editTodo(editTodoId)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
