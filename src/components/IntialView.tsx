import featuresCards from "../features.json";
import { Card, Container, Row, Col } from "react-bootstrap";
import LoginAuth0 from "./LoginAuth0";
import "../styles/IntialView.css";

const IntialView = () => {
  return (
    <>
      <Row className="d-flex">
        <Col>
          <Container className="d-flex mt-5">
            <div className="d-flex justify-content-center mx-auto align-items-center flex-wrap mt-5">
              {featuresCards.map((feature) => (
                <Col
                  xxl={4}
                  lg={4}
                  md={12}
                  className="d-flex mt-5"
                  key={feature.id}
                >
                  <Card
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
          className="d-flex justify-content-center mx-auto align-items-center mt-5"
        >
          <LoginAuth0 />
        </Col>
      </Row>
    </>
  );
};

export default IntialView;
