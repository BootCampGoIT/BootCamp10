import React from "react";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ routes }) => {
  return (
    <NavigationContainer>
      <ul className='navList'>
        {routes.map(({ path, name }) => (
          <li key={path} className='navItem'>
            <a href={path} className='navLink'>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
