import React, { Component } from "react";
import { OverLay } from "./ModalStyled";

class Modal extends Component {
  state = {
    body: document.querySelector("body"),
  };
  
  componentDidMount() {
    window.addEventListener("keydown", this.onHandleEscape);
    this.state.body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onHandleEscape);
    this.state.body.style.overflow = "auto";
  }

  onHandleEscape = (e) => e.code === "Escape" && this.props.toggleModal();

  onOverlayClick = (e) =>
    e.target === e.currentTarget && this.props.toggleModal();

  render() {
    return (
      <OverLay onClick={this.onOverlayClick}>{this.props.children}</OverLay>
    );
  }
}



export default Modal;
