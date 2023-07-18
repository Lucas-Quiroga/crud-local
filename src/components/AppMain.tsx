import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserInfo";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";

const AppMain = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <Container className="d-flex flex-column justify-content-center mx-auto mt-5">
          <Row
            style={{
              borderRadius: "1rem",
              border: "2px solid black",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
            className="d-flex justify-content-center mb-2"
          >
            {isLoading ? (
              <Spinner
                animation="border"
                role="status"
                className="d-flex flex-column justify-content-center mx-auto align-items-center"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
                <Col
                  lg={2}
                  style={{ backgroundColor: " #e3e9eb " }}
                  className="d-flex flex-column"
                >
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
              </>
            )}
          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default AppMain;
