import React from "react";
import FormAlertMessage from "../alerts/form-alert-message.component";

const renderImage = (imageObj) => {
    if (Object.keys(imageObj).length < 0) return;

    const { path: src, name } = imageObj;

    return (
        <div className="text-center">
            <img
                src={src}
                className="rounded img-thumbnail"
                alt={name}
                style={{ height: "10rem" }}
            />
        </div>
    );
};

const FileInput = ({ imageObj, error, ...rest }) => {
    return (
        <>
            {imageObj && renderImage(imageObj)}
            <label className="form-label">Attach an image</label>
            <input
                className="form-control form-control-lg"
                type="file"
                {...rest}
            />
            {error && <FormAlertMessage type="error" message={error} />}
        </>
    );
};

export default FileInput;
