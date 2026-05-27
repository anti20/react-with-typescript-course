import React from "react";

type Theme = "dark" | "light";
const ThemeContext = React.createContext<Theme>("dark");

export default ThemeContext;
export const ThemeConsumer = ThemeContext.Consumer;
export const ThemeProvider = ThemeContext.Provider;
