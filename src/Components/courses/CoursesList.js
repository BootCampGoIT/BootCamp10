import ModuleList from "./moduleList/ModuleList";

const CoursesList = ({ courses }) => {
  return (
    <ul className='coursesList'>
      {courses.map(({ id, name, modules }) => (
        <li key={id}>
          <h2>{name}</h2>
          <ModuleList modules={modules} />
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
