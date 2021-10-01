import axios from "axios";
import React, { Component } from "react";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import CoursesList from "../courses/CoursesList";
import GroupsForm from "../groups/groupsForm/GroupsForm";
import GroupsList from "../groups/groupsList/GroupsList";

import Section from "../section/Section";

class Main extends Component {
  state = {
    groups: [],
    courses: [],
    filter: "",
  };

  componentDidMount() {
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

  setFilter = (e) => this.setState({ filter: e.target.value });
  getFilteredGroups = () =>
    this.state.groups.filter((group) =>
      group.groupName.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    return (
      <main>
        <Section title='CourseList'>
          <CoursesList courses={this.state.courses} />
        </Section>

        <GroupsForm addGroup={this.addGroup} />
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
        <GroupsList
          groups={this.getFilteredGroups()}
          deleteGroup={this.deleteGroup}
        />
      </main>
    );
  }
}

export default Main;
