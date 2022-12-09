import React, { Component } from "react";
import "./ErrorBoundary.css";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static gerDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <div className="title-xl f-bold-pro">There was an error</div>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
