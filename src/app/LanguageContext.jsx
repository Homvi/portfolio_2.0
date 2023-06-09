"use client";

import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

const getLanguageShort = () => {
  let userLang = navigator.languages
    ? navigator.languages[0]
    : navigator.language || navigator.userLanguage;

  let languageShort = "EN";

  let formattedLanguage = userLang.split("-");

  switch (formattedLanguage[1]) {
    case "HU":
      languageShort = "HU";
      break;
    case "ES":
      languageShort = "ES";
      break;
    default:
      languageShort = "EN";
      break;
  }

  return languageShort;
};
export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    setLanguage(getLanguageShort());
  }, []);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {props.children}
    </LanguageContext.Provider>
  );
};
