//renderizara la columna del usuario
import { Container, Row, Col, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/UserInfo.css";

const UserInfo = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="d-flex flex-column " style={{ overflow: "hidden" }}>
        <div className="d-flex gap-3 ball_container mt-2">
          <div className="ball zoom" style={{ backgroundColor: "red" }}></div>
          <div
            className="ball zoom"
            style={{ backgroundColor: "orange" }}
          ></div>
          <div className="ball zoom" style={{ backgroundColor: "green" }}></div>
        </div>
        <Row className="d-flex flex-column gap-3">
          <Col className="d-flex flex-column gap-3 mx-2 mt-3 align-items-center">
            <div
              style={{
                objectFit: "cover",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "grey",
                fontSize: "1.2rem",
                overflow: "hidden",
              }}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src={user?.picture}
                alt=""
                style={{ objectFit: "cover", width: "80px" }}
              />
            </div>
            <div className="d-flex flex-wrap">{user?.name}</div>
          </Col>
          <Col>
            <Accordion className="accordion_content">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Tools</Accordion.Header>
                <Accordion.Body>
                  <Container fluid>
                    <a href="/todo">
                      <Button>Todo</Button>
                    </a>
                    <a href="/todo/color">
                      <Button>Colors</Button>
                    </a>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
    )
  );
};

export default UserInfo;
