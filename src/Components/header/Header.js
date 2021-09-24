import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <header>
      <a href='http://'>Logo</a>
      <Navigation routes={mainRoutes} />
    </header>
  );
};

export default Header;
