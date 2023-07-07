//Este componente se encargará de renderizar la lista de tareas.
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { todoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, handleChequed, deleteTodo, handleShow, editTodoId, show } =
    useContext(todoContext);

  return (
    <div style={{ marginTop: "auto" }}>
      <Container
        style={{
          flex: 1,
          position: "relative",
          maxHeight: "100%",
          overflowY: "auto",
          padding: 0,
        }}
      >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChequed={handleChequed}
            deleteTodo={deleteTodo}
            handleShow={handleShow}
            editTodoId={editTodoId}
            show={show}
          />
        ))}
        <br />
      </Container>
      <TodoInput />
    </div>
  );
};

export default TodoList;
