import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppMain from "./components/AppMain";
import IntialView from "./components/IntialView";
import Holaa from "./components/Holaa";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntialView />} />
        <Route path="/hola" element={<Holaa />} />
        <Route path="/todo/*" element={<AppMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
