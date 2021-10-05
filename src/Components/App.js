import React, { useState, useEffect, createContext } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import courses from "../data/main/courses.json";
import GlobalStyles from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import themes from "../themes";
import useLanguageHook from "../hooks/useLanguageHook";
import { languages } from "../languages";

export const LanguageContext = createContext();
// =============================
const App = () => {
  const [currentLanguage, setCurrentLanguage, languagesList] =
    useLanguageHook();

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );
  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <LanguageContext.Provider
      value={{
        language: languages[currentLanguage],
        setCurrentLanguage,
        languagesList,
        currentLanguage
      }}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Header changeTheme={changeTheme} />
        <Main courses={courses} />
      </ThemeProvider>
    </LanguageContext.Provider>
  );
};

export default App;
