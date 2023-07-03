import { useState, createContext } from "react";

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

export const todoContext = createContext<TodoContextType>({
  todos: [],
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
  deleteTodo() {},
  task: "",
  setTask: () => {},
});

const TodoContext = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  //añadir tarea
  function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    const newTodo: Todo = {
      id: todos.length + 1,
      text: task,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  }
  //eliminar tarea
  function deleteTodo(id: number) {
    const deleteArrTodo = todos.filter((e) => e.id !== id);
    setTodos(deleteArrTodo);
  }

  //subrayar tarea

  return (
    <todoContext.Provider
      value={{ todos, task, handleSubmit, deleteTodo, setTask }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContext;
