import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppMain from "./components/AppMain";
import IntialView from "./components/IntialView";
import LoginAuth0 from "./components/LoginAuth0";
import LogoutAuth0 from "./components/LogoutAuth0";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user } = useAuth0();
  console.log(user);

  return (
    <div>
      <LoginAuth0 />
      <LogoutAuth0 />

      <div className="profile">
        <ul>
          <li>{user?.email}</li>
          <li>{user?.name}</li>
        </ul>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntialView />} />
          {/* <Route path="/login" element={<LoginAuth0 />} /> */}
          <Route path="/todo" element={<AppMain />} />
          <Route path="/todo/*" element={<AppMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
