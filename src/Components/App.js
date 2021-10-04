import React, { Component } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import courses from "../data/main/courses.json";
import GlobalStyles from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import themes from "../themes";

class App extends Component {
  state = {
    theme: JSON.parse(localStorage.getItem("theme")) || "dark",
  };

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("theme", JSON.stringify(this.state.theme));
    if (prevState.theme !== this.state.theme) {
      this.setState((prev) => ({ x: (prev.x += 1) }));
    }
  }

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

