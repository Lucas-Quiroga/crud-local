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
  editTodo: (id: number) => void;
}

export const todoContext = createContext<TodoContextType>({
  todos: [],
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
  deleteTodo() {},
  editTodo() {},
  task: "",
  setTask: () => {},
});

const TodoContextProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //añadir tarea
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!task) {
      return;
    }

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

  //editar tarea
  function editTodo(id: number) {
    const updateTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editTask } : todo
    );
    setTodos(updateTodo);
    handleClose();
  }

  //subrayar tarea

  return (
    <todoContext.Provider
      value={{
        todos,
        task,
        handleSubmit,
        deleteTodo,
        editTodo,
        setTask,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
