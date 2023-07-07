import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <BrowserRouter>
      <Container className="d-flex flex-column justify-content-center mx-auto vh-100">
        <Row
          style={{
            borderRadius: "1rem",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
          className="d-flex justify-content-center mb-2"
        >
          <Col lg={2} style={{ backgroundColor: " #e3e9eb " }}>
            <UserInfo />
          </Col>

          <Col
            lg={10}
            style={{
              backgroundColor: " #e0ded8 ",
              height: "35rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <Header />

            <TodoList />
            <TodoInput />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
