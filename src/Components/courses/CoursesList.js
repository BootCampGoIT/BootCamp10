import React, { Component } from "react";
import { CoursesListStyled } from "./CourseListStyled";
import CoursesListItem from "./coursesListItem/CoursesListItem";
import { CourseListItemContainer } from "./coursesListItem/CoursesListItemStyled";
import Modal from "../modal/Modal";
import CoursesForm from "./coursesForm/CoursesForm";
import PropTypes from "prop-types";

class CoursesList extends Component {
  state = {
    isCourseFormOpen: false,
    courses: [...this.props.courses],
  };

  componentDidMount() {
    // axios.get(`https://`)
  }

  addCourse = (item) => {
    this.setState((prev) => ({
      courses: [...prev.courses, item],
      isCourseFormOpen: false,
    }));
  };

  toggleForm = () => {
    this.setState((prev) => ({ isCourseFormOpen: !prev.isCourseFormOpen }));
  };

  render() {
    return (
      <CoursesListStyled>
        <CourseListItemContainer onClick={this.toggleForm}>
          <div className='courseListItemContent'>+</div>
        </CourseListItemContainer>

        {this.state.courses.map(({ id, modules, name }) => (
          <CoursesListItem key={id} modules={modules} name={name} />
        ))}

        {this.state.isCourseFormOpen && (
          <Modal>
            <CoursesForm />
            <button type='button' onClick={this.toggleForm}>
              Close
            </button>
            <button
              type='button'
              onClick={() => this.addCourse({ name: "TEST" })}>
              Add course
            </button>
          </Modal>
        )}
      </CoursesListStyled>
    );
  }
}

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
};

export default CoursesList;
