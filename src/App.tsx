import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Login from "./components/Login";
import Register from "./components/Register";
import UsersContextProvider from "./context/UserContext";
import { usersContext } from "./context/UserContext";

function App() {
  const { activeSession, setActiveSession } = useContext(usersContext);

  const [activeComponent, setActiveComponent] = useState(false);

  function toggleComponent() {
    setActiveComponent(!activeComponent);
  }

  return (
    <BrowserRouter>
      {activeSession ? (
        <Container className="d-flex flex-column justify-content-center mx-auto vh-100">
          <Row
            style={{
              borderRadius: "1rem",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
            className="d-flex justify-content-center mb-2"
          >
            <Col
              lg={2}
              style={{ backgroundColor: " #e3e9eb " }}
              className="d-flex flex-column"
            >
              <UserInfo />
              <Button
                variant="secondary"
                className="mt-5 justify-content-end"
                onClick={() => setActiveSession(false)}
              >
                Logout
              </Button>
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
      ) : (
        <Container className="d-flex flex-column justify-content-center mx-auto vh-100">
          <Row
            style={{
              borderRadius: "1rem",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
            className="d-flex justify-content-center mb-2"
          >
            {activeComponent ? <Login /> : <Register />}
          </Row>
          <Button
            variant="secondary"
            onClick={toggleComponent}
            className="mt-3"
          >
            {activeComponent ? "Register" : "Login"}
          </Button>
        </Container>
      )}
    </BrowserRouter>
  );
}

export default App;
