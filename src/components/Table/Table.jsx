import React from "react";

import "./Table.css";

const Table = ({ entries }) => {
  return (
    <div className="table f-regular" role="table">
      <div className="table-head table-row" role="row">
        <div className="table-cell" role="columnheader">
          Attribute
        </div>
        <div className="table-cell" role="columnheader">
          Value
        </div>
      </div>
      {entries.map(([key, value], idx) => (
        <div className="table-row" role="row" key={idx}>
          <div className="table-cell" role="rowheader">
            {key}
          </div>
          <div className="table-cell" role="cell">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
