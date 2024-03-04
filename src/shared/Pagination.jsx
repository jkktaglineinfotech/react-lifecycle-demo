import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { pages, onClick } = this.props;
    const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);
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
  }
}

export default Pagination;
