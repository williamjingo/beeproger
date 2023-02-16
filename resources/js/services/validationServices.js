import Joi from "joi";

// validate property
export function validateProperty({ name, value, validate_schema }) {
    const obj = { [name]: value };

    const schema = Joi.object({ [name]: validate_schema.extract(name) });
    const { error } = schema.validate(obj);
    return error ? error.details[0].message : null;
}

// form validation
export function validate(data, schema) {
    const options = { abortEarly: false };
    const { error } = schema.validate(data, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
}
