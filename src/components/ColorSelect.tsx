import { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ColorPaletteContext } from "../context/ColorContext";
import { TwitterPicker } from "react-color/";
import "../styles/ColorSelect.css";

const ColorSelect = () => {
  const { colors, setColors } = useContext(ColorPaletteContext);

  function handleResetColor(title: any) {
    // Restablecer el color base para la opción dada
    if (title === "User") {
      setColors((prevColors) => ({
        ...prevColors,
        [title]: "#e3e9eb",
      }));
    }
    if (title === "Dashboard") {
      setColors((prevColors) => ({
        ...prevColors,
        [title]: "#e0ded8",
      }));
    }
  }

  const optionChange = [
    {
      id: Math.random(),
      title: "User",
    },
    {
      id: Math.random(),
      title: "Dashboard",
    },
  ];

  return (
    <Row className="d-flex justify-content-center mx-auto align-items-center">
      {optionChange.map((e) => (
        <Col
          key={e.id}
          lg={6}
          md={6}
          sm={12}
          className="d-flex justify-content-center align-items-center "
        >
          <div className="cookie-card">
            <span className="title">🎨 {e.title.toLocaleUpperCase()}</span>
            <div className="description">
              <TwitterPicker
                color={colors[e.title]}
                onChangeComplete={(color) =>
                  setColors((prevColors) => ({
                    ...prevColors,
                    [e.title]: color.hex,
                  }))
                }
              />
            </div>
            <div className="actions">
              <Button
                className="accept ms-auto"
                onClick={() => handleResetColor(e.title)}
                variant="secondary"
              >
                Reset
              </Button>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ColorSelect;
