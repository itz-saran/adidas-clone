import React, { Component } from "react";

import "./Advertisement.css";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

export class Advertisement extends Component {
  render() {
    return (
      <div className="ad">
        {this.props.children}
        <div className="ad-content-wrapper flex">
          <div className="ad-content flex-column">
            <div className="content-text">
              {this.props.title ? (
                <h2
                  className={`ad-title  ${
                    this.props.yeezy ? "f-yeezy" : "f-bold"
                  } title-xl`}
                >{`${this.props.title}`}</h2>
              ) : (
                ""
              )}
              {this.props.content ? (
                <p className="f-light title-md">{`${this.props.content}`}</p>
              ) : (
                ""
              )}
            </div>
            <div className="btn-group flex-column">
              {this.props.buttons.map((button) => {
                return (
                  <ButtonOutline
                    key={button.title}
                    theme={button.theme ?? "black"}
                    bold
                    title={button.title}
                    to={button.to}
                    width={button.width}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Advertisement;
