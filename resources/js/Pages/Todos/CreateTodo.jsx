import React, { useState } from "react";
import Joi from "joi";

import Button from "../../components/button.component";
import DefaultLayout from "../../components/default-layout.component";
import FormAlertMessage from "../../components/alerts/form-alert-message.component";
import todoService from "../../services/todoService";
import Notice from "../../components/alerts/notice.component";
import TextInput from "../../components/form/text-input.component";
import TextareaInput from "../../components/form/textarea-input.component";
import FileInput from "../../components/form/file-input.component";

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
    const [notice, setNotice] = useState(null);

    const [loading, setLoading] = useState(false);

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
    const handOnInputChange = ({
        target,
        currentTarget: { name, value, type },
    }) => {
        const data = { ...todo };

        // update property
        if (type === "file") {
            data[name] = target.files[0];
        } else {
            data[name] = value;
        }

        const errorMessage = validateProperty({ name, value });
        const errors = { ...formErrors };
        if (errorMessage) errors[name] = errorMessage;
        else delete errors[name];

        setFormErrors({ ...errors });
        setTodo(data);
    };

    // form validation
    const validate = (data) => {
        const options = { abortEarly: false };
        const { error } = validate_schema.validate(data, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    // handle on submit
    const handleOnSubmit = async () => {
        try {
            const errors = validate(todo);

            if (errors && Object.keys(errors).length > 0) {
                setFormErrors(errors);
                return;
            }

            setLoading(true);

            await todoService.storeTodo(todo);

            setNotice({ type: "success", message: "Todo Added Successfully" });
            setLoading(false);
            setTodo({ ...DEFAULT_TODO });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <DefaultLayout title={renderPageTitle()}>
            <>
                {notice && <Notice {...notice} />}

                <div className="mb-3">
                    <TextInput
                        name="title"
                        value={todo.title}
                        error={formErrors.title}
                        onChange={handOnInputChange}
                    />
                </div>
                <div className="mb-3">
                    <TextareaInput
                        name="description"
                        value={todo.description}
                        error={formErrors.description}
                        onChange={handOnInputChange}
                    />
                </div>
                <div className="mb-3">
                    <FileInput
                        name="image"
                        error={formErrors.image}
                        onChange={handOnInputChange}
                    />
                </div>

                <div className="btn-group" role="group">
                    <Button type="back" />
                    <Button
                        type="submit"
                        onSubmit={handleOnSubmit}
                        disabled={loading}
                    />
                </div>
            </>
        </DefaultLayout>
    );
};

export default CreateTodo;
