import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoContextProvider from "./context/TodoContext.tsx";
import UsersContextProvider from "./context/UserContext.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_APPDEPLOY;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
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
