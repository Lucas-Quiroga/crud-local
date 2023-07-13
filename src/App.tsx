import { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppMain from "./components/AppMain";
import LoginAuth0 from "./components/LoginAuth0";
import { todoContext } from "./context/TodoContext";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const { todos, setTodos } = useContext(todoContext);

  // const { activeSession } = useContext(usersContext);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getAccessToken = await getAccessTokenSilently();
        setAccessToken(getAccessToken);

        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
          const parsedTodos = JSON.parse(storedTodos);
          setTodos(parsedTodos);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [getAccessTokenSilently, setTodos, setAccessToken]);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<a href="/login">ir a logear</a>} /> */}
        <Route path="/" element={<LoginAuth0 />} />
        <Route path="/todo" element={<AppMain />} />
        {/* // <Route path="/" element={<AuthForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
