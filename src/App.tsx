import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppMain from "./components/AppMain";
import IntialView from "./components/IntialView";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<IntialView />} />
        <Route path="/todo" element={<AppMain />} />
        <Route path="/todo/:todoSection" element={<AppMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
