import React from "react";

import { Link } from "react-router-dom";

const PaginationItemIconLink = ({
    label,
    page,
    currentPage,
    lastPage,
    onPageChange,
}) => {
    const link_classes = () => {
        let css_classes = "page-item";

        if (label === "Previous" && currentPage === 1) {
            css_classes += " disabled";
        } else if (label === "Next" && currentPage === lastPage) {
            css_classes += " disabled";
        }

        return css_classes;
    };

    return (
        <li className={link_classes()}>
            <Link
                to={"/"}
                className="page-link"
                role="button"
                onClick={(e) => {
                    e.preventDefault();
                    if (label.toLowerCase() === "next") {
                        onPageChange(page + 1);
                    } else {
                        onPageChange(page - 1);
                    }
                }}
            >
                {label}
            </Link>
        </li>
    );
};

export default PaginationItemIconLink;
