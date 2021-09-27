import { CoursesListStyled } from "./CourseListStyled";
import CoursesListItem from "./coursesListItem/CoursesListItem";
import ModuleList from "./moduleList/ModuleList";

const CoursesList = ({ courses }) => {
  return (
    <CoursesListStyled>
      {courses.map(({ id, modules, name }) => (
        <CoursesListItem key={id} modules={modules} name={name} />
      ))}
    </CoursesListStyled>
  );
};

export default CoursesList;
