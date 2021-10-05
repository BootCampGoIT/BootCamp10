import React, { useState, useContext } from "react";
import axios from "axios";
import { GroupFormContainer } from "./GroupFormStyled";
import sprite from "../../../icons/main/sprite.svg";
import { LanguageContext } from "../../App";

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

const GroupsForm = ({ tutors, addGroup, closeForm }) => {
  const { language } = useContext(LanguageContext);
  const [state, setState] = useState({
    ...initialState,
    tutor: tutors[0],
    mentor: tutors[0],
  });

  const toDataURL = (element) => {
    return new Promise((resolve) => {
      const reader = new FileReader(); //{}
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(element.files[0]);
    });
  };

  const onHandleChange = async (e) => {
    const { value, name, type } = e.target;
    if (type === "file") {
      const res = await toDataURL(e.target);
      setState((prev) => ({ ...prev, avatar: res }));
      return;
    }
    if (type === "radio") {
      setState((prev) => ({ ...prev, isActive: !prev.isActive }));
      return;
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://ited-fc7ac-default-rtdb.firebaseio.com/groups.json`, state)
      .then((res) => {
        addGroup({ ...state, id: res.data.name });
        closeForm();
      })
      .catch((err) => console.log(err));
  };

  const checkStudent = (e) => {
    isUserChecked(e.target.name)
      ? setState((prev) => ({
          ...prev,
          members: prev.members.filter((student) => student !== e.target.name),
        }))
      : setState((prev) => ({
          ...prev,
          members: [...prev.members, e.target.name],
        }));
  };

  const isUserChecked = (student) => {
    return state.members.includes(student);
  };

  return (
    <GroupFormContainer>
      <form onSubmit={onHandleSubmit} className='groupsForm'>
        <div className='groupFormAvatarImage'>
          <label className='groupFormAvatarLabel'>
            {state.avatar ? (
              <img src={state.avatar} alt='pic' />
            ) : (
              <svg className='groupFormAvatarIcon'>
                <use href={sprite + "#icon-camera"} />
              </svg>
            )}
            <input
              type='file'
              name='avatar'
              onChange={onHandleChange}
              className='groupFormAvatarInput'
            />
          </label>
        </div>

        <label>
          {language.groupForm.name}:
          <input
            type='text'
            name='groupName'
            onChange={onHandleChange}
            value={state.groupName}
          />
        </label>
        <label>
          {language.groupForm.startDate}:
          <input
            type='text'
            name='startDate'
            onChange={onHandleChange}
            value={state.startDate}
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
                  checked={isUserChecked(student)}
                  onChange={checkStudent}
                  className='groupFormStudentsListInput'
                />
              </label>
            </li>
          ))}
        </ul>
        <label>
          {language.groupForm.tutor}:
          <select name='tutor' onChange={onHandleChange}>
            {tutors.map((tutor) => (
              <option value={tutor.name} key={tutor.id}>
                {tutor.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          {language.groupForm.mentor}:
          <select name='mentor' onChange={onHandleChange}>
            {tutors.map((mentor) => (
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
              checked={state.isActive}
              onChange={onHandleChange}
              className='groupFormActiveGroupInput'
            />
          </label>
          <label className='groupFormActiveGroupLabel'>
            <span className='groupFormActiveGroupTitle'>Inactive</span>
            <input
              type='radio'
              name='isActive'
              checked={!state.isActive}
              onChange={onHandleChange}
              className='groupFormActiveGroupInput'
            />
          </label>
        </div>
        <button type='submit' disabled={!(state.groupName && state.startDate)}>
          {language.groupForm.saveButton}
        </button>
      </form>
    </GroupFormContainer>
  );
};

export default GroupsForm;
