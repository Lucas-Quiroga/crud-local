import { createContext, useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "colorPaletteData";

interface ColorPaletteContextType {
  colors: { [key: string]: string };
  setColors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

const defaultColorPaletteContext: ColorPaletteContextType = {
  colors: {},
  setColors: () => {},
};

export const ColorPaletteContext = createContext<ColorPaletteContextType>(
  defaultColorPaletteContext
);

const ColorContextProvider = ({ children }: any) => {
  const [colors, setColors] = useState<{ [key: string]: string }>(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData
      ? JSON.parse(storedData)
      : {
          User: "#e3e9eb",
          Dashboard: "#e0ded8",
        };
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(colors));
  }, [colors]);

  return (
    <ColorPaletteContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorPaletteContext.Provider>
  );
};

export default ColorContextProvider;
