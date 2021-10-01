import React, { Component } from "react";

import { TutorFormContainer } from "./TutorFormStyled";
import sprite from "../../../icons/main/sprite.svg";

const levels = ["junior", "middle", "senior"];
const experience = ["1 year", "3 years", "5 years"];

const toDataURL = (element) => {
  return new Promise((resolve) => {
    const reader = new FileReader(); //{}
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
};

class TutorForm extends Component {
  state = {
    avatar: "", //input type="file"
    name: "", //input type="text"
    level: levels[0], //select
    skills: "", //textarea
    experience: experience[0], // input type="radiobutton"
  };
  onHandleChange = (e) => {
    const { type, value, name } = e.target;
    if (type === "file") {
      if (e.target.files[0]) {
        toDataURL(e.target).then((avatar) => this.setState({ avatar }));
      } else return;
    }
    // =======================================
    // select, input[type="text"], input[type="radio"], textarea
    this.setState({ [name]: value });
    // =====================
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTutor(this.state);
  };

  render() {
    return (
      <TutorFormContainer>
        <form className='tutorForm' onSubmit={this.onHandleSubmit}>
          <label className='tutorFormAvatarLabel'>
            {this.state.avatar ? (
              <img src={this.state.avatar} alt='pic' />
            ) : (
              <svg className='tutorFormAvatarIcon'>
                <use href={sprite + "#icon-camera"} />
              </svg>
            )}
            <input
              type='file'
              name='avatar'
              onChange={this.onHandleChange}
              className='tutorFormAvatarInput'
            />
          </label>

          <label>
            Name:
            <input
              type='text'
              name='name'
              onChange={this.onHandleChange}
              value={this.state.name}
            />
          </label>
          <label>
            Level:
            <select onChange={this.onHandleChange} name='level'>
              {levels.map((level) => (
                <option value={level} key={level}>
                  {level}
                </option>
              ))}
            </select>
          </label>
          <label>
            Skills:
            <textarea
              name='skills'
              cols='30'
              rows='10'
              onChange={this.onHandleChange}
              value={this.state.skills}
            />
          </label>
          <label>
            Experience:
            <div className='tutorFormExperienceBlock'>
              {experience.map((item) => (
                <label key={item} className='tutorFormExperienceLabel'>
                  <span className='tutorFormExperienceLabelTitle'>{item}</span>
                  <input
                    type='radio'
                    onChange={this.onHandleChange}
                    name='experience'
                    value={item}
                    checked={this.state.experience === item}
                    className='tutorFormExperienceRadio'
                  />
                </label>
              ))}
            </div>
          </label>
          <button type='submit'>Save tutor</button>
        </form>
      </TutorFormContainer>
    );
  }
}

export default TutorForm;

const tutor = {
  name: "Alex Petrov",
  level: "middle",
  skills: "HTML/CSS, JS, React",
  experience: "больше 3 лет",
  avatar: "geghgh4j23jg423hgj42fg4h2",
};
