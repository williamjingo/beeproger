import React from "react";
import FormAlertMessage from "../alerts/form-alert-message.component";

const TextareaInput = ({ name, error, ...rest }) => {
    return (
        <>
            <textarea
                className="form-control form-control-lg"
                rows="3"
                name={name}
                placeholder={`${name}...`}
                {...rest}
            />

            {error && <FormAlertMessage type="error" message={error} />}
        </>
    );
};

export default TextareaInput;
