import React, { Component } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import courses from "../data/main/courses.json";
import GlobalStyles from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import themes from "../themes";

class App extends Component {
  state = {
    theme: "dark",
  };

  changeTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  render() {
    return (
      <>
        <ThemeProvider theme={themes[this.state.theme]}>
          <GlobalStyles />
          <Header changeTheme={this.changeTheme} />
          <Main courses={courses} />
        </ThemeProvider>
      </>
    );
  }
}

export default App;

// const themeColors = {
//   light: {
//     title: "light",
//     colors: {},
//   },
//   dark: {
//     title: "dark",
//     colors: {},
//   },
// };

// {
//   getName();
//   function getName() {
//     console.log("Hello");
//   }
// }

// const changeTheme = (currentTheme) => {
//   console.log(themeColors[currentTheme]);
// };

// changeTheme("light");
// changeTheme("dark");
