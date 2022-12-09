import React, { Component } from "react";

import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <div className="search-bar">
          <form action="/" className="flex">
            <input type="text" placeholder="Search" />
            <button type="submit" className="btn btn-search">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
