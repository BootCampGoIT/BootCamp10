const Section = ({ title, children }) => {
  return (
    <section>
      <hr />
      <h2>{title}</h2>
      {children}
      <hr />
    </section>
  );
};

export default Section;
