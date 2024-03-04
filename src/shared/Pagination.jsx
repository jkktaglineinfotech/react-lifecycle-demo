import React from "react";

export const Pagination = ({ pages = 0, onClick }) => {
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

  const updatePageNo = (page) => {
    console.log(page);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map((page, index) => (
          <li key={index} className="page-item">
            <button className="page-link" onClick={onClick}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
