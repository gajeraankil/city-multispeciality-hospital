import React, { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionTypes";
import { themeReducer } from "./reducer/ThemeReducer";

export const ThemeContext = createContext();

const initVal = {
  theme: "light",
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initVal);

  const toggleTheme = (val) => {
    const themeColor = val === "light" ? "dark" : "light";
    dispatch({ type: TOGGLE_THEME, payload: themeColor });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
