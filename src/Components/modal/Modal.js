import React, { useEffect } from "react";
import { OverLay } from "./ModalStyled";

const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", onHandleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onHandleEscape);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const onHandleEscape = (e) => e.code === "Escape" && toggleModal();

  const onOverlayClick = (e) => e.target === e.currentTarget && toggleModal();
  return <OverLay onClick={onOverlayClick}>{children}</OverLay>;
};

export default Modal;
