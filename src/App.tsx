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
            <Header />

            <Routes>
              <Route path="/all" element={"toda la lista"} />{" "}
              {/* Renderiza el componente TodoList directamente en la ruta "/" */}
              <Route path="/complete" element={"completas"} />{" "}
              {/* Agrega un componente para la ruta "/complete" */}
              <Route path="/active" element={"activadas"} />{" "}
              {/* Agrega un componente para la ruta "/active" */}
            </Routes>
            <TodoList />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
