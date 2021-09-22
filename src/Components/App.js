import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import headerListItems from "../data/header/index.json";
import courses from "../data/main/courses.json";

const App = () => (
  <>
    <Header list={headerListItems} />
    <Main courses={courses} />
  </>
);

export default App;
