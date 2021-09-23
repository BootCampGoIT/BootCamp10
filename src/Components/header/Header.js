import React from "react";

const Header = ({ list }) => {
  return (
      <header>
        <a href='http://'>Logo</a>
        <nav>
          <ul>
            {list.map((listItem) => (
              <li key={listItem}>
                <a href='#'>{listItem}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
  );
};

export default Header;
