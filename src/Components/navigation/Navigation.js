import React from "react";

const Navigation = ({ routes }) => {
  return (
    <nav>
      <ul>
        {routes.map(({ path, name }) => (
          <li key={path}>
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
