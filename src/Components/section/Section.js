import React, { useContext } from "react";
import { LanguageContext } from "../App";
import { SectionContainer } from "./SectionStyled";

const Section = (props) => {
  const { title, children, theme = "light" } = props;
  const { language } = useContext(LanguageContext);

  return (
    <SectionContainer>
      <h2 className='sectionTitle'>{language.sections[title]}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;
