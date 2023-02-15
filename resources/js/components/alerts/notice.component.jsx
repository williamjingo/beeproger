import React from "react";

const Notice = ({ type, message }) => {
    if (type === "success") return renderSuccessfullNotice(message);
    return null;
};

const renderSuccessfullNotice = (message) => {
    return (
        <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
        >
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
