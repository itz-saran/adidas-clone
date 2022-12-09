import React, { useRef, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import "./Dropdown.scss";

const Dropdown = ({ selectedIdx, options, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const optionsRef = useRef();
  const toggleOptions = () => {
    optionsRef.current.classList.toggle("custom-dropdown__options--hidden");
    setIsExpanded(isExpanded ? false : true);
  };

  return (
    <div className="custom-dropdown">
      <button
        className="btn flex-between f-regular f-bold custom-dropdown__select"
        onClick={toggleOptions}
      >
        <span>{options[selectedIdx]}</span>
        <span>{isExpanded ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</span>
      </button>
      <div
        className="custom-dropdown__options custom-dropdown__options--hidden"
        ref={optionsRef}
      >
        {options.map((option, idx) => (
          <div
            className={`custom-dropdown__option ${
              selectedIdx === idx
                ? "f-bold custom-dropdown__option--selected"
                : ""
            }`}
            data-value={option}
            onClick={(e) => {
              onClick(e);
              toggleOptions();
            }}
            key={idx}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
