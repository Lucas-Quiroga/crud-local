import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppMain from "./components/AppMain";
import AuthForm from "./components/AuthForm";
import LoginAuth0 from "./components/LoginAuth0";
import { usersContext } from "./context/UserContext";

function App() {
  // const { activeSession } = useContext(usersContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<a href="/login">ir a logear</a>} />
        <Route path="/login" element={<LoginAuth0 />} />
        <Route path="/todo" element={<AppMain />} />
        {/* // <Route path="/" element={<AuthForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
