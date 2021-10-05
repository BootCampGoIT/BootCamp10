import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const LanguageContext = createContext();

const DataProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");
  return (
    <LanguageContext.Provider value={language}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default DataProvider;
