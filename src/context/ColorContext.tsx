import { createContext, useState } from "react";

interface ColorPaletteContextType {
  colors: string;
  setColors: (colors: string) => void;
}

const defaultColorPaletteContext: ColorPaletteContextType = {
  colors: "",
  setColors: () => {},
};

export const ColorPaletteContext = createContext<ColorPaletteContextType>(
  defaultColorPaletteContext
);

const ColorContextProvider = ({ children }: any) => {
  const [colors, setColors] = useState("");

  return (
    <ColorPaletteContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorPaletteContext.Provider>
  );
};

export default ColorContextProvider;
