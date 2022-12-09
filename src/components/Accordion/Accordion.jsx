import React, { useRef, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { getStars } from "../../assets/helpers/helper";

import "./Accordion.scss";

const Accordion = ({ title, open, children, stars }) => {
  const contentRef = useRef();
  const headRef = useRef();
  const activateAccordion = () => {
    headRef.current.classList.toggle("active");
    contentRef.current.classList.toggle("active");
    setActive(active ? false : true);
  };
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="accordion">
        <div
          className={`head f-bold flex-between ${
            open ? "active" : ""
          } flex-wrap`}
          ref={headRef}
          onClick={activateAccordion}
        >
          <div>{title}</div>
          <div className="flex">
            {getStars(stars ?? -1)?.map((ele, idx) => (
              <div key={idx}>{ele}</div>
            ))}
            <div>{active ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</div>
          </div>
        </div>
        <div className={`content ${open ? "active" : ""}`} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
