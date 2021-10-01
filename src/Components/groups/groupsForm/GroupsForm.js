import React, { Component } from "react";
import axios from "axios";
import { GroupFormContainer } from "./GroupFormStyled";

const students = ["Alex Ivanov", "Nikita Petrov", "Andrii Shnurkov"];

const initialState = {
  groupName: "",
  startDate: "",
  avatar: "",
  members: [],
  tutor: "",
  mentor: "",
  isActive: false,
};

class GroupsForm extends Component {
  state = {
    ...initialState,
    tutor: this.props.tutors[0],
    mentor: this.props.tutors[0],
  };

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
              {this.props.tutors.map((tutor) => (
                <option value={tutor.name} key={tutor.id}>
                  {tutor.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Mentor:
            <select name='mentor' onChange={this.onHandleChange}>
              {this.props.tutors.map((mentor) => (
                <option value={mentor.name} key={mentor.id}>
                  {mentor.name}
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
