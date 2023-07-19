import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { ColorPaletteContext } from "../context/ColorContext";
import { BlockPicker } from "react-color/";

const ColorSelect = () => {
  const { colors, setColors } = useContext(ColorPaletteContext);

  function handleChangeColors(args: any) {
    const newColors = args.hex;
    setColors(newColors);
  }

  return (
    <Row className="d-flex justify-content-center mx-auto mt-5 align-items-center">
      <Col lg={4}>
        <BlockPicker color={colors} onChangeComplete={handleChangeColors} />
        <p>Colores selec: {colors}</p>
      </Col>
      <Col lg={4}>
        <BlockPicker color={colors} onChangeComplete={handleChangeColors} />
        <p>Colores selec: {colors}</p>
      </Col>
      <Col lg={4}>
        <BlockPicker color={colors} onChangeComplete={handleChangeColors} />
        <p>Colores selec: {colors}</p>
      </Col>
    </Row>
  );
};

export default ColorSelect;
