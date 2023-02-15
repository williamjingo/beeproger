import React from "react";
import FormAlertMessage from "../alerts/form-alert-message.component";

const TextInput = ({ name, error, ...rest }) => {
    return (
        <>
            <input
                className="form-control form-control-lg"
                type="text"
                name={name}
                placeholder={`${name}...`}
                {...rest}
            />

            {error && <FormAlertMessage type="error" message={error} />}
        </>
    );
};

export default TextInput;
