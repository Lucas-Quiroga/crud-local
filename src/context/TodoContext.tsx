import { useState, createContext } from "react";

enum Filter {
  All = "All",
  Complete = "Complete",
  Active = "Active",
}

interface Todo {
  id: number;
  text: string;
  chequed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteTodo: (id: number) => void;
  task: string;
  setTask: (task: string) => void;
  editTodo: (
    id: number,
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  show: boolean;
  chequed: boolean;
  handleShow: (id: number) => void;
  handleChequed: (id: number) => void;
  handleClose: () => void;
  setEditTask: (task: string) => void;
  setEditTodoId: (id: number) => void;
  editTodoId: number;
  filter: Filter;
  filterTodos: Todo[];
  handleFilterChange: (newFilter: Filter) => void;
}

export const todoContext = createContext<TodoContextType>({
  todos: [],
  handleSubmit: () => {},
  deleteTodo() {},
  editTodo() {},
  task: "",
  setTask: () => {},
  show: false,
  chequed: false,
  handleShow: () => {},
  handleChequed: () => {},
  handleClose: () => {},
  setEditTask: () => {},
  setEditTodoId: () => {},
  editTodoId: 0,
  filter: Filter.All,
  filterTodos: [],
  handleFilterChange: () => {},
});

const TodoContextProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editTodoId, setEditTodoId] = useState<number>(0);
  const [show, setShow] = useState(false);
  const [chequed] = useState(false);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const filterTodos = todos.filter((todo) => {
    if (filter === Filter.Complete) {
      if (filter.length === 0 && filter === Filter.Complete) {
        return "no hay nada";
      }
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

  //subrayar tarea
  function handleChequed(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, chequed: !todo.chequed } : todo
      )
    );
  }

  const handleClose = () => setShow(false);
  const handleShow = (id: number) => {
    setEditTodoId(id);
    setShow(true);
  };

  //añadir tarea
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!task) {
      return;
    }

    const newTodo: Todo = {
      id: Math.random(),
      text: task,
      chequed: false,
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
  function editTodo(
    id: number,
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editTask } : todo
    );
    setTodos(updatedTodos);
    handleClose();
  }

  return (
    <todoContext.Provider
      value={{
        todos,
        task,
        handleSubmit,
        deleteTodo,
        editTodo,
        setTask,
        show,
        handleShow,
        handleClose,
        setEditTask,
        editTodoId,
        setEditTodoId,
        chequed,
        handleChequed,
        filter,
        filterTodos,
        handleFilterChange,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
