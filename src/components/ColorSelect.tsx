import { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ColorPaletteContext } from "../context/ColorContext";
import { TwitterPicker } from "react-color/";

const ColorSelect = () => {
  const { colors, setColors } = useContext(ColorPaletteContext);

  function handleResetColor(title: any) {
    // Restablecer el color base para la opción dada
    if (title === "UserInfo") {
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
      title: "UserInfo",
    },
    {
      id: Math.random(),
      title: "Dashboard",
    },
  ];

  return (
    <Row className="d-flex justify-content-center mx-auto mt-5 align-items-center">
      {optionChange.map((e) => (
        <Col
          key={e.id}
          lg={12}
          md={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h4>Cambiar color a: {e.title}</h4>
          <hr />
          <TwitterPicker
            color={colors[e.title]}
            onChangeComplete={(color) =>
              setColors((prevColors) => ({
                ...prevColors,
                [e.title]: color.hex,
              }))
            }
          />
          <Button onClick={() => handleResetColor(e.title)}>Reset</Button>
        </Col>
      ))}
    </Row>
  );
};

export default ColorSelect;
