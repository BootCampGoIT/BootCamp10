import React, { Component } from "react";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import CoursesList from "../courses/CoursesList";
import GroupsForm from "../groups/GroupsForm";
import Section from "../section/Section";

class Main extends Component {
  state = {
    groups: [],
    filter: "",
  };

  addGroup = (group) =>
    this.setState((prev) => ({ groups: [...prev.groups, group] }));

  deleteGroup = (id) => {
    this.setState((prev) => ({
      groups: prev.groups.filter((group) => group.id !== id),
    }));
  };

  setFilter = (e) => this.setState({ filter: e.target.value });
  getFilteredGroups = () =>
    this.state.groups.filter((group) =>
      group.groupName.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  render() {
    return (
      <main>
        {/* <Section title='CourseList'>
        <CoursesList courses={this.props.courses} />
      </Section> */}

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
        <ul>
          {this.getFilteredGroups().map((group) => (
            <li key={group.id}>
              {group.groupName}
              <button type='button' onClick={() => this.deleteGroup(group.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Main;

