import { useState, useEffect } from "react";
import { languages } from "../languages";

const useLanguageHook = () => {
  const getLocalLanguage = () => JSON.parse(localStorage.getItem("language")) || "russian";
  
  const [currentLanguage, setCurrentLanguage] = useState(getLocalLanguage());
  const languagesList = Object.keys(languages);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(currentLanguage));
  }, [currentLanguage]);

  return [currentLanguage, setCurrentLanguage, languagesList];
};

export default useLanguageHook;
