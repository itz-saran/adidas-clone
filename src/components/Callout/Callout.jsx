import React, { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "../Modals/Modal";
import { AiOutlineClose } from "react-icons/ai";

import "./Callout.scss";

const Callout = forwardRef(({ title, children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    setIsOpen,
  }));
  const closeCallout = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen ? (
        <Modal>
          <div className="callout">
            <div className="callout__title">
              <h1 className="f-bold-pro title-lg">{title}</h1>
              <span className="btn btn-close icon" onClick={closeCallout}>
                <AiOutlineClose />
              </span>
            </div>
            <div className="callout__content">{children}</div>
          </div>
        </Modal>
      ) : null}
    </>
  );
});

export default Callout;
