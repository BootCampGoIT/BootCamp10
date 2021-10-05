import React, { useContext } from "react";
import { LanguageContext } from "../App";
// import useLanguageHook from "../../hooks/useLanguageHook";

const LanguageSwitcher = () => {
  const { currentLanguage, setCurrentLanguage, languagesList } =
    useContext(LanguageContext);
  const onHandleChange = (e) => setCurrentLanguage(e.target.value);
  const list = [currentLanguage, ...languagesList];
  const set = [...new Set(list)];

  return (
    <select onChange={onHandleChange} value={currentLanguage}>
      {set.map((language) => (
        <option value={language} key={language}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
