import React from "react";

import { Link } from "react-router-dom";

const PaginationItem = ({ currentPage, page, onPageChange }) => {
    let linkClasses = "page-link";
    if (page === currentPage) linkClasses += " active";

    return (
        <li className="page-item">
            <Link
                to={"/"}
                className={linkClasses}
                onClick={(e) => {
                    e.preventDefault();
                    if (currentPage !== page) onPageChange(page);
                }}
            >
                {page}
            </Link>
        </li>
    );
};

export default PaginationItem;
