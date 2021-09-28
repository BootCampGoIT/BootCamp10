import React, { Component } from "react";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import CoursesList from "../courses/CoursesList";
import GroupsForm from "../groups/GroupsForm";
import Section from "../section/Section";

class Main extends Component {
  state = {
    groups: [],
  };

  addGroup = (group) =>
    this.setState((prev) => ({ groups: [...prev.groups, group] }));
  deleteGroup = (id) => {
    this.setState((prev) => ({
      groups: prev.groups.filter((group) => group.id !== id),
    }));
  };
  render() {
    return (
      <main>
        {/* <Section title='CourseList'>
        <CoursesList courses={this.props.courses} />
      </Section> */}

        <GroupsForm addGroup={this.addGroup} />
        <ul>
          {this.state.groups.map((group) => (
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
