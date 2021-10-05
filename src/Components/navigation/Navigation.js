import React, { useContext } from "react";
import { LanguageContext } from "../App";

import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ routes }) => {
  const { language } = useContext(LanguageContext);
  return (
    <NavigationContainer>
      <ul className='navList'>
        {routes.map(({ path, name }) => (
          <li key={path} className='navItem'>
            <a href={path} className='navLink'>
              {language.navigation[name]}
            </a>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
