import TodoContextProvider from "./context/TodoContext";
import { Container, Row, Col } from "react-bootstrap";
import beachImg from "./assets/beach.jpeg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>

      <Container
        className="mt-5 d-flex flex-column justify-content-center mx-auto container_app"
        style={{
          borderRadius: "1rem",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Row>
          <Col lg={2} style={{ backgroundColor: "lightblue" }}>
            <UserInfo />
          </Col>

          <Col
            lg={10}
            style={{
              backgroundImage: `url(${beachImg})`,
              backgroundSize: "cover",
              backgroundPosition: "0 60rem",
              height: "35rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TodoList />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
