import { SectionContainer } from "./SectionStyled";

const Section = (props) => {
  const { title, children, theme = "light" } = props;

  return (
    <SectionContainer>
      <h2 className='sectionTitle'>{title}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;
