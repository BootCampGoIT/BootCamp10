import styles from "./Section.module.css";

const Section = (props) => {
  const { title, children, theme = "light" } = props;

  return (
    <section
      className={theme === "dark" ? styles.darkBorder : styles.lightBorder}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
