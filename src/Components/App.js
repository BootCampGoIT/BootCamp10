import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import courses from "../data/main/courses.json";
import GlobalStyles from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import themes from "../themes";

const App = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );
  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    console.log("mounted");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [theme])

  // componentDidUpdate(prevProps, prevState) {
  //   localStorage.setItem("theme", JSON.stringify(this.state.theme));
  //   if (prevState.theme !== this.state.theme) {
  //     this.setState((prev) => ({ x: (prev.x += 1) }));
  //   }
  // }
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Header />
      <Main courses={courses} />
    </ThemeProvider>
  );
};

export default App;
