import featuresCards from "../features.json";
import { Card, Container, Row, Col } from "react-bootstrap";
import LoginAuth0 from "./LoginAuth0";
import "../styles/IntialView.css";

const IntialView = () => {
  return (
    <>
      <Row className="d-flex">
        <Col>
          <Container className="d-flex vh-100" fluid>
            <div className="d-flex justify-content-center mx-auto align-items-center flex-wrap">
              {featuresCards.map((feature) => (
                <Col lg={4} className="d-flex">
                  <Card
                    key={feature.id}
                    className="zoom mx-4 bg-dark text-white"
                    style={{ overflow: "hidden" }}
                  >
                    <Card.Header>{feature.title}</Card.Header>
                    <Card.Img
                      variant="top"
                      src={feature.img}
                      style={{ objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Text>{feature.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{feature.date}</Card.Footer>
                  </Card>
                </Col>
              ))}
            </div>
          </Container>
        </Col>
        <Col
          lg={12}
          className="d-flex justify-content-center mx-auto align-items-center"
        >
          <LoginAuth0 />
        </Col>
      </Row>
    </>
  );
};

export default IntialView;
