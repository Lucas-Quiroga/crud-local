import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoContextProvider from "./context/TodoContext.tsx";
import UsersContextProvider from "./context/UserContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UsersContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </UsersContextProvider>
  </React.StrictMode>
);
