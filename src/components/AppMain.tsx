import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserInfo";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";
import ColorSelect from "./ColorSelect";
import { useContext, useState, useEffect } from "react";
import { ColorPaletteContext } from "../context/ColorContext";
import { useParams } from "react-router-dom";
import "../styles/AppMain.css";

const AppMain = () => {
  const [vhimage, setVhimage] = useState(false);

  const { isLoading, isAuthenticated } = useAuth0();

  const { todoSection } = useParams();

  const { colors } = useContext(ColorPaletteContext);

  useEffect(() => {
    const handleResize = () => {
      setVhimage(window.innerWidth <= 576);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Container
          className="d-flex flex-column justify-content-center mx-auto"
          style={{ marginTop: `${vhimage ? 0 : "48px"}` }}
        >
          <Row
            style={{
              borderRadius: `${vhimage ? 0 : "1rem"}`,
              marginBottom: `${vhimage ? 0 : "48px"}`,
            }}
            className="d-flex justify-content-center  dashboard-app"
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
                  style={{ backgroundColor: `${colors["User"]}` }}
                  className="d-flex flex-column"
                >
                  <UserInfo />
                </Col>
                {todoSection === "color" ? (
                  <Col
                    lg={10}
                    style={{
                      backgroundColor: `${colors["Dashboard"]}`,
                      height: "35rem",
                      display: "flex",
                      justifyContent: "space-between",
                      overflow: "hidden",
                    }}
                  >
                    <ColorSelect />
                  </Col>
                ) : (
                  <Col
                    lg={10}
                    style={{
                      backgroundColor: `${colors["Dashboard"]}`,
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
                )}
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
