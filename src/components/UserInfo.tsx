//renderizara la columna del usuario
import { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAuth0 } from "@auth0/auth0-react";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/UserInfo.css";

const UserInfo = () => {
  const [vhImage, setVhImage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setVhImage(window.innerWidth <= 992);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              onClick={handleImageClick}
            >
              <img
                src={user?.picture}
                alt=""
                style={{ objectFit: "cover", width: "80px" }}
                className="zoom"
              />
            </div>
            <div className="d-flex flex-wrap">{user?.name}</div>
          </Col>
          <Col>
            {vhImage ? (
              <Container className="d-flex justify-content-center gap-4">
                <Link to="/todo">
                  <button className="btn-userinfo">Todo</button>
                </Link>

                <Link to="/todo/color">
                  <button className="btn-userinfo">Colors</button>
                </Link>
              </Container>
            ) : (
              <Accordion className="accordion_content">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="d-flex align-items-center gap-3">
                      <FaTools /> User tools
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Container
                      fluid
                      className="d-flex flex-column align-items-center gap-2"
                    >
                      <Link to="/todo">
                        <button className="btn-userinfo">Todo</button>
                      </Link>
                      <Link to="/todo/color">
                        <button className="btn-userinfo">Colors</button>
                      </Link>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}
          </Col>
        </Row>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          className="d-flex align-items-center"
        >
          <Modal.Header closeButton>
            <Modal.Title>{user?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={user?.picture}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Modal.Body>
        </Modal>
      </div>
    )
  );
};

export default UserInfo;
