import React, { useState } from "react";
import { useData } from "../../context/Data";

import "./styles.css";

function Header() {
  const [tempQuery, setTempQuery] = useState("");
  const { setQuery, setCurrentPage } = useData();

  function handleQueryChange(e) {
    setTempQuery(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    setQuery(tempQuery);
    setCurrentPage(1);
  }
  return (
    <header>
      <div className="header-content">
        <h1>News</h1>
        <form onSubmit={handleFormSubmit}>
          <i className="fas fa-search"></i>
          <input
            type="text"
            onChange={handleQueryChange}
            value={tempQuery}
            placeholder="Search"
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
