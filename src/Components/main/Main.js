import axios from "axios";
import React, { Component } from "react";
import { addTutor, getTutors } from "../../services/tutors/tutorsAPI";
import { Context } from "../App";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import GroupsForm from "../groups/groupsForm/GroupsForm";
import GroupsList from "../groups/groupsList/GroupsList";
import Toggler from "../hoc/Toggler";
import Hooks from "../hooks/Hooks";
import Modal from "../modal/Modal";
import AddItem from "../reusableComponents/addItem/AddItem";

import Section from "../section/Section";
import TutorForm from "../tutors/tutorForm/TutorForm";
import TutorsList from "../tutors/tutorsList/TutorsList";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import DetailsPage from "../../pages/DetailsPage";

class Main extends Component {
  state = {
    groups: [],
    courses: [],
    filter: "",
    tutors: [],
    error: "",
    isLoading: false,
    isGroupFormOpen: false,
    isTutorFormOpen: false,
  };

  addCourse = (course) => {
    this.setState((prev) => ({ courses: [...prev.courses, course] }));
  };

  async componentDidMount() {
    try {
      const tutors = await getTutors();
      if (tutors.length) {
        this.setState({ tutors });
      } else return;
    } catch (error) {}

    axios
      .get("https://ited-fc7ac-default-rtdb.firebaseio.com/groups.json")
      .then((res) => {
        const keys = Object.keys(res.data);
        const groups = keys.map((key) => ({ id: key, ...res.data[key] }));
        this.setState({ groups });
      });

    axios
      .get("https://ited-fc7ac-default-rtdb.firebaseio.com/courses.json")
      .then((res) => {
        if (res.data) {
          const keys = Object.keys(res.data);
          const courses = keys.map((key) => ({ id: key, ...res.data[key] }));
          this.setState({ courses });
        }
      });
  }

  // =========== tutors ==============
  toggleTutorForm = () => {
    this.setState((prev) => ({ isTutorFormOpen: !prev.isTutorFormOpen }));
  };

  addNewTutor = async (tutor) => {
    this.setState({ isLoading: true });
    try {
      const id = await addTutor(tutor);
      this.setState((prev) => ({
        tutors: [...prev.tutors, { ...tutor, id: id }],
      }));
    } catch (error) {
      this.setState({ error: "Something went wrong!" });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // =========== groups =============
  toggleGroupForm = () => {
    this.setState((prev) => ({ isGroupFormOpen: !prev.isGroupFormOpen }));
  };

  addGroup = (group) =>
    this.setState((prev) => ({ groups: [...prev.groups, group] }));

  deleteGroup = (id) => {
    axios
      .delete(
        `https://ited-fc7ac-default-rtdb.firebaseio.com/groups/${id}.json`
      )
      .then(() => {
        this.setState((prev) => ({
          groups: prev.groups.filter((group) => group.id !== id),
        }));
      })
      .catch((err) => console.log(err));
  };

  // ======= groups filter =============

  setFilter = (e) => this.setState({ filter: e.target.value });
  getFilteredGroups = () =>
    this.state.groups.filter((group) =>
      group.groupName.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    const methods = {
      getFilteredGroups: this.getFilteredGroups,
      setFilter: this.setFilter,
      deleteGroup: this.deleteGroup,
      addGroup: this.addGroup,
      toggleGroupForm: this.toggleGroupForm,
      addNewTutor: this.addNewTutor,
      toggleTutorForm: this.toggleTutorForm,
      addCourse: this.addCourse,
    };
    return (
      <main>
        <Switch>
          {mainRoutes.map(({ exact, path, component: MyComponent }) => (
            <Route
              exact={exact}
              path={path}
              // component={route.component}
              render={(
                props //history, location, match
              ) => <MyComponent {...this.state} {...props} methods={methods} />}
              key={path}
            />
          ))}
        </Switch>

        {/* <Context.Consumer>
          {(sadasdasdasd) => <h2>{sadasdasdasd}</h2>}
        </Context.Consumer> */}
        {/* <Toggler>
          {({ isOpen, onToggle }) => (
            <>
              <button type='button' onClick={onToggle}>
                Click
              </button>
              {isOpen && <p>Etiam feugiat lorem non metus.</p>}
            </>
          )}
        </Toggler> */}

        {/* ========================== */}
        {/* <CoursesForm addCourse={this.addCourse} /> */}
        {/* <Hooks /> */}
        {/* {this.state.isLoading && <h3>...loading</h3>} */}
        {/* ========== tutors ============== */}
        {/* <Section title='Tutors'>
          <TutorsList tutors={this.state.tutors}>
            <AddItem openForm={this.toggleTutorForm} />
          </TutorsList>
          {this.state.isTutorFormOpen && (
            <Modal toggleModal={this.toggleTutorForm}>
              <TutorForm addNewTutor={this.addNewTutor} />
            </Modal>
          )}
        </Section> */}
        {/* ========== courses ================= */}
        {/* <Section title='CourseList'>
          <CoursesList courses={this.state.courses} />
        </Section> */}

        {/*============= groups ============= */}
        {/* <hr />
        <label>
          Filter:
          <input
            type='text'
            onChange={this.setFilter}
            value={this.state.filter}
          />
        </label>
        <hr />
        <Section title='groups'>
          <GroupsList
            groups={this.getFilteredGroups()}
            deleteGroup={this.deleteGroup}>
            <AddItem openForm={this.toggleGroupForm} />
          </GroupsList>
          {this.state.isGroupFormOpen && (
            <Modal toggleModal={this.toggleGroupForm}>
              <GroupsForm
                addGroup={this.addGroup}
                tutors={this.state.tutors}
                closeForm={this.toggleGroupForm}
              />
            </Modal>
          )}
        </Section> */}
      </main>
    );
  }
}

export default Main;
