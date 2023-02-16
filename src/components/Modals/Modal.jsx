import React from "react";
import { createPortal } from "react-dom";

import "./Modal.scss";

const Modal = ({ children }) => {
  window.onclick()
  return createPortal(
    <div id="modal" className="modal">
      <div className="modal__container">
        <div className="modal__content flex-center">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
