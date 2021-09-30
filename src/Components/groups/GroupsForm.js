import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { GroupFormContainer } from "./GroupFormStyled";

const students = ["Alex Ivanov", "Nikita Petrov", "Andrii Shnurkov"];
const tutors = ["Alex Ivanov", "Nikita Petrov"];
const mentors = ["Boris Hrevtsov", "Sergii Borisov"];
// const titors = { tutor: "Viktor Dayneko", mentor: "Boris Shevcov" };
const courses = [
  {
    id: "vhjgh4234234h",
    name: "HTML/CSS",
    avatar: "dgfhhgjj",
    modules: ["dgfhjhj112", "fhgg12hj21"],
  },
  {
    id: "fgnhgg324hg234",
    name: "JavaScript",
    avatar: "dgfhhgjj",
    modules: ["dgfhjhj112", "fhgg12hj21"],
  },
];

// state = {
//     name: "BootCamp 10",
//     members: ["-MkfI5jb9063fvkCeGGd", "dgjhgk213312z23", "gkhgh4gj2343423"],
//     tutors: {
//       tutor: "fgfg23423fgh4fg23f4g23",
//       mentor: "53345vv35fdgcvhmgjhj",
//     },
//     courses: ["vhjgh4234234h", "fgnhgg324hg234"],
//   };

const initialState = {
  groupName: "",
  startDate: "",
  avatar: "",
  members: [],
  tutor: tutors[0],
  mentor: "",
  isActive: false,
};

class GroupsForm extends Component {
  state = { ...initialState };

  onHandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://ited-fc7ac-default-rtdb.firebaseio.com/groups.json`,
        this.state
      )
      .then((res) => this.props.addGroup({ ...this.state, id: res.data.name }))
      .catch((err) => console.log(err))
      .finally(() => this.setState({ ...initialState }));
    // this.props.addGroup({ ...this.state, id: uuidv4() });

    // get, post, put, patch, delete
  };

  toDataURL = (element) => {
    return new Promise((resolve) => {
      const reader = new FileReader(); //{}
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(element.files[0]);
    });
  };

  onHandleChange = async (e) => {
    const { value, name, type } = e.target;
    if (type === "file") {
      const res = await this.toDataURL(e.target);
      this.setState({ avatar: res });
      return;
    }
    if (type === "radio") {
      this.setState((prev) => ({ isActive: !prev.isActive }));
      return;
    }
    this.setState({ [name]: value });
  };

  checkStudent = (e) => {
    this.isUserChecked(e.target.name)
      ? this.setState((prev) => ({
          members: prev.members.filter((student) => student !== e.target.name),
        }))
      : this.setState((prev) => ({
          members: [...prev.members, e.target.name],
        }));
  };

  isUserChecked = (student) => {
    return this.state.members.includes(student);
  };

  render() {
    return (
      <GroupFormContainer>
        <form onSubmit={this.onHandleSubmit} className='groupsForm'>
          <div className='groupFormAvatarImage'>
            <label className='groupFormAvatarLabel'>
              {this.state.avatar && <img src={this.state.avatar} alt='pic' />}
              <input
                type='file'
                name='avatar'
                onChange={this.onHandleChange}
                className='groupFormAvatarInput'
              />
            </label>
          </div>

          <label>
            Name:
            <input
              type='text'
              name='groupName'
              onChange={this.onHandleChange}
              value={this.state.groupName}
            />
          </label>
          <label>
            StartDate:
            <input
              type='text'
              name='startDate'
              onChange={this.onHandleChange}
              value={this.state.startDate}
            />
          </label>
          <ul className='groupFormStudentsList'>
            {students.map((student) => (
              <li key={student}>
                <label className='groupFormStudentsListLabel'>
                  <span className='groupFormStudentsListTitle'>{student}</span>
                  <input
                    type='checkbox'
                    name={student}
                    checked={this.isUserChecked(student)}
                    onChange={this.checkStudent}
                    className='groupFormStudentsListInput'
                  />
                </label>
              </li>
            ))}
          </ul>
          <label>
            Tutor:
            <select name='tutor' onChange={this.onHandleChange}>
              {tutors.map((tutor) => (
                <option value={tutor} key={tutor}>
                  {tutor}
                </option>
              ))}
            </select>
          </label>
          <label>
            Mentor:
            <select name='mentor' onChange={this.onHandleChange}>
              {mentors.map((mentor) => (
                <option value={mentor} key={mentor}>
                  {mentor}
                </option>
              ))}
            </select>
          </label>
          <div className='groupFormActiveGroup'>
            <label className='groupFormActiveGroupLabel'>
              <span className='groupFormActiveGroupTitle'>Active</span>
              <input
                type='radio'
                name='isActive'
                checked={this.state.isActive}
                onChange={this.onHandleChange}
                className='groupFormActiveGroupInput'
              />
            </label>
            <label className='groupFormActiveGroupLabel'>
              <span className='groupFormActiveGroupTitle'>Inactive</span>
              <input
                type='radio'
                name='isActive'
                checked={!this.state.isActive}
                onChange={this.onHandleChange}
                className='groupFormActiveGroupInput'
              />
            </label>
          </div>
          <button
            type='submit'
            disabled={!(this.state.groupName && this.state.startDate)}>
            Save group
          </button>
        </form>
      </GroupFormContainer>
    );
  }
}

export default GroupsForm;
