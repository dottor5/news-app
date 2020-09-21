import React from "react";
import { useData } from "../../context/Data";

import "./styles.css";

function Pagination() {
  const { totalResults, currentPage, setCurrentPage } = useData();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalResults / 3); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="navigation">
      {pageNumbers.map((pageNumber) => (
        <button
          className={currentPage === pageNumber ? "active" : ""}
          key={pageNumber}
          onClick={() => {
            setCurrentPage(pageNumber);
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
