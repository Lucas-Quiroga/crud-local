import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoContextProvider from "./context/TodoContext.tsx";
import UsersContextProvider from "./context/UserContext.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_APPDEPLOY + "/todo",
      }}
    >
      <UsersContextProvider>
        <TodoContextProvider>
          <App />
        </TodoContextProvider>
      </UsersContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);
