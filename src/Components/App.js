import React, { useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import courses from "../data/main/courses.json";
import GlobalStyles from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import themes from "../themes";

const App = () => {
  const [currentTheme, setCurrenTheme] = useState(themes.light);

  return (
    <>
      <button
        type='button'
        onClick={() =>
          setCurrenTheme(
            currentTheme.title === "dark" ? themes.light : themes.dark
          )
        }>
        Change Theme
      </button>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Header />
        <Main courses={courses} />
      </ThemeProvider>
    </>
  );
};
export default App;
