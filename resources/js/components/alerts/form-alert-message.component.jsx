import React from "react";

const FormAlertMessage = ({ type, message }) => {
    // return null if message is not set
    if (!message) return null;

    if (type == "error")
        return <div className="invalid-feedback d-block">{message}</div>;

    return <div className="valid-feedback d-block">{message}</div>;
};

export default FormAlertMessage;
