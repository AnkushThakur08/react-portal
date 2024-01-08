import React from "react";
import ReactDom from "react-dom";

const Modal = ({ children, open, close }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div>{children}</div>
      <p onClick={close}>X</p>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
