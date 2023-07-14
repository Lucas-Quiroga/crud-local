import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppMain from "./components/AppMain";
// import IntialView from "./components/IntialView";
import LoginAuth0 from "./components/LoginAuth0";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LoginAuth0 />

      <Routes>
        {/* <Route path="/" element={<IntialView />} /> */}

        {/* <Route path="/login" element={<LoginAuth0 />} /> */}
        <Route path="/todo/*" element={<AppMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
