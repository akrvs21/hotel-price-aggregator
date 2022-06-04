import React from "react";
import cl from "./Pagination.module.css";

const Pagination = ({ postPerPage, totalPost, paginate, currentPage }) => {
  const pageNumbers = [];
  console.log(postPerPage, totalPost);

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("pageNumbers", pageNumbers);
  return (
    <div className="page-container">
      <nav>
        <ul className={cl.pagination}>
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? cl.current_page_item : cl.pageItem}
            >
              {number}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
