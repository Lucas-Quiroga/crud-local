//renderizara la columna del usuario
import { Container, Row, Col } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import Accordion from "react-bootstrap/Accordion";
import "../styles/UserInfo.css";

const UserInfo = () => {
  return (
    <div className="d-flex flex-column " style={{ overflow: "hidden" }}>
      <div className="d-flex gap-3 ball_container mt-2">
        <div className="ball zoom" style={{ backgroundColor: "red" }}></div>
        <div className="ball zoom" style={{ backgroundColor: "orange" }}></div>
        <div className="ball zoom" style={{ backgroundColor: "green" }}></div>
      </div>
      <Row className="d-flex flex-column gap-3">
        <Col className="d-flex gap-3 mx-2 mt-3">
          <div
            style={{
              objectFit: "cover",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "grey",
              fontSize: "1.2rem",
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <FiUser />
          </div>
          <h6>Welcome</h6>
        </Col>
        <Col>
          <Accordion className="accordion_content">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Features</Accordion.Header>
              <Accordion.Body>
                <Container fluid>work in progress</Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default UserInfo;
