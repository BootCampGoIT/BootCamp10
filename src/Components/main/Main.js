import axios from "axios";
import React, { Component } from "react";
import { addTutor, getTutors } from "../../services/tutors/tutorsAPI";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import GroupsForm from "../groups/groupsForm/GroupsForm";
import GroupsList from "../groups/groupsList/GroupsList";
import Modal from "../modal/Modal";
import AddItem from "../reusableComponents/addItem/AddItem";

import Section from "../section/Section";
import TutorForm from "../tutors/tutorForm/TutorForm";
import TutorsList from "../tutors/tutorsList/TutorsList";

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
    return (
      <main>
        {this.state.isLoading && <h3>...loading</h3>}
        {/* ========== tutors ============== */}
        <Section title='Tutors'>
          <TutorsList tutors={this.state.tutors}>
            <AddItem openForm={this.toggleGroupForm} />
          </TutorsList>
          {this.state.isTutorFormOpen && (
            <Modal toggleModal={this.toggleTutorForm}>
              <TutorForm addNewTutor={this.addNewTutor} />
            </Modal>
          )}
        </Section>
        <CoursesForm />
        {/* ========== courses ================= */}
        {/* <Section title='CourseList'>
          <CoursesList courses={this.state.courses} />
        </Section> */}

        {/*============= groups ============= */}
        <hr />
        <label>
          Filter:
          <input
            type='text'
            onChange={this.setFilter}
            value={this.state.filter}
          />
        </label>
        <hr />
        <Section title='Groups'>
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
        </Section>
      </main>
    );
  }
}

export default Main;
