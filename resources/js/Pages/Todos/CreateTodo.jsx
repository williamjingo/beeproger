import React, { useState } from "react";
import Joi from "joi";

import Button from "../../components/button.component";
import DefaultLayout from "../../components/default-layout.component";
import FormAlertMessage from "../../components/alerts/form-alert-message.component";

const renderPageTitle = () => {
    return (
        <>
            <i className="bi bi-file-plus" /> Create Todo
        </>
    );
};

// default todo
const DEFAULT_TODO = {
    title: "",
    description: "",
    image: null,
};

const CreateTodo = () => {
    const [todo, setTodo] = useState({ ...DEFAULT_TODO });
    const [formErrors, setFormErrors] = useState({});

    // validation schema
    const validate_schema = Joi.object({
        title: Joi.string().min(2).max(50).label("Title").required(),
        description: Joi.string().max(255).label("Description"),
        image: Joi.any().label("Image"),
    });

    // validate property
    const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };

        const schema = Joi.object({ [name]: validate_schema.extract(name) });
        const { error } = schema.validate(obj);
        return error ? error.details[0].message : null;
    };

    // handle form errors
    const handOnInputChange = ({ currentTarget: { name, value, type } }) => {
        const data = { ...todo };

        // update property
        data[name] = value;

        const errorMessage = validateProperty({ name, value });
        const errors = { ...formErrors };
        if (errorMessage) errors[name] = errorMessage;
        else delete errors[name];

        setFormErrors({ ...errors });
        setTodo(data);
    };

    return (
        <DefaultLayout title={renderPageTitle()}>
            <>
                <div className="mb-3">
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        name="title"
                        placeholder="Title ..."
                        value={todo.title}
                        onChange={handOnInputChange}
                    />

                    <FormAlertMessage type="error" message={formErrors.title} />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control form-control-lg"
                        rows="3"
                        name="description"
                        placeholder="Description"
                        value={todo.description}
                        onChange={handOnInputChange}
                    />

                    <FormAlertMessage
                        type="error"
                        message={formErrors.description}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Attach an image</label>
                    <input
                        className="form-control form-control-lg"
                        type="file"
                        name="image"
                        onChange={handOnInputChange}
                    />
                    <FormAlertMessage type="error" message={formErrors.image} />
                </div>

                <div className="btn-group" role="group">
                    <Button type="back" />
                    <Button type="submit" />
                </div>
            </>
        </DefaultLayout>
    );
};

export default CreateTodo;
