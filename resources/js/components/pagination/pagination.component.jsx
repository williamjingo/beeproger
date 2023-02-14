import React from "react";
import _ from "lodash";
import PaginationItem from "./pagination-item.component";
import PaginationItemIconLink from "./pagination-item-icon-link.component";

const Pagination = ({ data = {}, onPageChange }) => {
    // check if data
    if (Object.keys(data).length <= 1) return null;

    // hide pagination if there are no todo lists
    if (data.data.length === 0) return null;

    const { current_page, last_page, total, per_page } = data.meta;

    // round up to eliminates decimal points
    const pagesCount = Math.ceil(total / per_page);

    if (pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <PaginationItemIconLink
                    label="Previous"
                    page={current_page}
                    currentPage={current_page}
                    lastPage={last_page}
                    onPageChange={onPageChange}
                />

                {pages &&
                    pages.map((page) => (
                        <PaginationItem
                            key={page}
                            page={page}
                            currentPage={current_page}
                            onPageChange={onPageChange}
                        />
                    ))}

                <PaginationItemIconLink
                    label="Next"
                    page={current_page}
                    currentPage={current_page}
                    lastPage={last_page}
                    onPageChange={onPageChange}
                />
            </ul>
        </nav>
    );
};

export default Pagination;
