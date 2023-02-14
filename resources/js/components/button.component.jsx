import { capitalize } from "lodash";
import React from "react";

import { useNavigate } from "react-router-dom";

/**
 * Function Renders a Back button
 * @param {*} type
 * @returns
 */
const renderBackButton = (type) => {
    const navigation = useNavigate();

    const handleOnBack = () => navigation(-1);

    return (
        <button type="button" className="btn btn-dark" onClick={handleOnBack}>
            <i className="bi bi-arrow-left-circle" /> {type}
        </button>
    );
};

/**
 * Function renders Buttons and Submit button as the default button
 *
 * @param {*} param0
 * @returns
 */
const Button = ({ type }) => {
    if (!type) return null;

    // capitalize type
    const btn_type = capitalize(type);

    // back button
    if (btn_type === "Back") return renderBackButton(type);

    // submit button
    return (
        <button type="button" className="btn btn-primary">
            Submit
        </button>
    );
};

export default Button;
