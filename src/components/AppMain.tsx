import { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserInfo from "./UserInfo";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { usersContext } from "../context/UserContext";
import LogoutAuth0 from "./LogoutAuth0";

const AppMain = () => {
  const { setActiveSession } = useContext(usersContext);

  return (
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

          <LogoutAuth0 />
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
  );
};

export default AppMain;
