//renderizara la columna del usuario
import { Container, Row, Col } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const UserInfo = () => {
  return (
    <div className="d-flex flex-column " style={{ overflow: "hidden" }}>
      <div className="d-flex gap-3 ball_container mt-2">
        <div className="ball" style={{ backgroundColor: "red" }}></div>
        <div className="ball" style={{ backgroundColor: "orange" }}></div>
        <div className="ball" style={{ backgroundColor: "green" }}></div>
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
          <Container>
            <ListGroup as="ol" numbered className="d-flex">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Important</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Assigned to me</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Planned</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default UserInfo;
