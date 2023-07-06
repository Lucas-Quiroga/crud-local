//Este componente se encargará de renderizar la lista de tareas.
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { todoContext } from "../context/TodoContext";

interface Todo {
  id: number;
  text: string;
  chequed: boolean;
}

enum Filter {
  All = "All",
  Complete = "Complete",
  Active = "Active",
}

const TodoList = () => {
  const { todos, handleChequed, deleteTodo, handleShow, editTodoId, show } =
    useContext(todoContext);

  const [filter, setFilter] = useState<Filter>(Filter.All);

  const filterTodos = todos.filter((todo) => {
    if (filter === Filter.Complete) {
      return todo.chequed;
    }
    if (filter === Filter.Active) {
      return !todo.chequed;
    }
    return true;
  });

  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter);
  };

  return (
    <div style={{ marginTop: "auto" }}>
      <Container
        style={{
          flex: 1,
          position: "relative",
          maxHeight: "100%",
          overflowY: "auto",
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
