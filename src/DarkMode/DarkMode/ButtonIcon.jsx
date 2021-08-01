import React from "react";
import { useDarkMode } from "./useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "../Styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Toggle from "../Styles/Toggle";
const Button = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default Button;
