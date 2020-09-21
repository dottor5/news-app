import React, { useState } from "react";
import { useData } from "../../context/Data";

import "./styles.css";

function Header() {
  const [tempQuery, setTempQuery] = useState("");
  const { setQuery } = useData();

  function handleQueryChange(e) {
    setTempQuery(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    setQuery(tempQuery);
    console.log(tempQuery);
  }
  return (
    <header>
      <div className="header-content">
        <h1>News</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" onChange={handleQueryChange} value={tempQuery} />
        </form>
      </div>
    </header>
  );
}

export default Header;
