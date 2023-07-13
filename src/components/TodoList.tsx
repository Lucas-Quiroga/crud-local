//Este componente se encargará de renderizar la lista de tareas.
import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import TodoItem from "./TodoItem";
import { todoContext } from "../context/TodoContext";
import "../styles/TodoInput.css";

enum Filter {
  All = "All",
  Complete = "Complete",
  Active = "Active",
}

const TodoList = () => {
  const {
    todos,
    handleChequed,
    deleteTodo,
    handleShow,
    editTodoId,
    show,
    filterTodos,
    filter,
  } = useContext(todoContext);

  let message = "";

  if (filter === Filter.Complete && filterTodos.length === 0) {
    message = "No tasks completed.";
  }
  if (filter === Filter.Active && filterTodos.length === 0) {
    message = "No active tasks found.";
  }
  if (filter === Filter.All && filterTodos.length === 0) {
    message = "Add a task to get started.";
  }

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(filterTodos));
  // }, [filterTodos]);

  return (
    <div
      className="container-wrapper"
      style={{ marginTop: "auto", overflow: "hidden" }}
    >
      <Container
        className="todo-list"
        style={{
          flex: 1,
          position: "relative",
          maxHeight: "100%",
          overflowY: "auto",
          padding: 0,
        }}
      >
        {message && <p>{message}</p>}
        {filterTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChequed={handleChequed}
            deleteTodo={deleteTodo}
            handleShow={handleShow}
            editTodoId={editTodoId}
            show={show}
            isChecked={todo.chequed}
          />
        ))}
        <br />
      </Container>
    </div>
  );
};

export default TodoList;
