import React, { Component } from "react";

import { TutorFormContainer } from "./TutorFormStyled";

const levels = ["junior", "middle", "senior"];
const experience = ["1 год", "3 года", "5 лет"];

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
      toDataURL(e.target).then((avatar) => this.setState({ avatar }));
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
          <label>
            <input type='file' name='avatar' onChange={this.onHandleChange} />
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
            {experience.map((item) => (
              <label key={item}>
                {item}
                <input
                  type='radio'
                  onChange={this.onHandleChange}
                  name='experience'
                  value={item}
                  checked={this.state.experience === item} //true || false
                />
              </label>
            ))}
          </label>
          <button type='submit'></button>
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
