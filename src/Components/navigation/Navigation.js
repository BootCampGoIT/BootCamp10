import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ routes, match = "" }) => {
  const location = useLocation();
  return (
    <NavigationContainer>
      <ul className='navList'>
        {routes.map(({ path, name, exact }) => (
          <li key={path} className='navItem'>
            <NavLink
              to={{ pathname: match + path , state: { from: location.pathname } }}
              className='navLink'
              activeClassName='activeNavLink'
              exact={exact}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
