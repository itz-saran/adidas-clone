import React from "react";
import { useSelector } from "react-redux";
import Accordion from "../Accordion/Accordion";
import Table from "../Table/Table";

import "./Details.css";

function Details() {
  const productData = useSelector((state) => state.product);
  return (
    <div>
      <Accordion title={"Details"}>
        <div className="details">
          <div className="grid-2 f-regular">
            <ul>
              {productData.currentShowcase.details?.content.map(
                (content, idx) => (
                  <li key={idx}>{content}</li>
                )
              )}
            </ul>
            <ul>
              {productData.currentShowcase.details?.color.map((color, idx) => (
                <li key={idx}>{color}</li>
              ))}
            </ul>
          </div>
          <Table
            entries={Object.entries(
              productData.currentShowcase.details?.table ?? {}
            )}
          />
        </div>
      </Accordion>
    </div>
  );
}

export default Details;
