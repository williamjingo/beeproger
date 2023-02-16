import React from "react";

const Notice = ({ type, message }) => {
    const noticeTypes = ["success", "danger"];

    if (!noticeTypes.includes(type)) return null;

    const noticeClassName = `alert alert-${type} alert-dismissible fade show`;

    return (
        <div className={noticeClassName} role="alert">
            {message}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    );
};

export default Notice;
