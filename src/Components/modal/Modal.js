import React from "react";
import { OverLay } from "./ModalStyled";

const Modal = ({ children }) => {
  return <OverLay>{children}</OverLay>;
};

export default Modal;
