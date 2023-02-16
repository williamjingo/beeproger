import { boolean } from "joi";

const apiEndPoint = "/api/todos";

/**
 * Queries backend todos
 * @param {*} page
 * @returns
 */
export function getTodos(page = 1) {
    return axios.get(`${apiEndPoint}?page=${page}`);
}

/**
 * Queries backend todo by id
 * @param {*} page
 * @returns
 */
export function getTodo(Id) {
    return axios.get(`${apiEndPoint}/${Id}`);
}

/**
 * Function makes request to backend to delete Todo
 *
 * @param {*} param0
 * @returns
 */
export function deleteTodo({ id }) {
    return axios.delete(`${apiEndPoint}/${id}`);
}

/**
 * Function requests Api to update todo
 * @param {*} todo
 * @returns
 */
export function updateTodo(todo) {
    const formData = new FormData();

    console.log(todo);

    // append to form data
    Object.keys(todo).forEach((key) => {
        // if image is not change remove
        if (key === "image") {
            todo[key] = todo[key] instanceof File ? todo[key] : null;
        }

        if (todo[key] && key !== "is_complete") {
            formData.append(key, todo[key]);
        }

        if (key === "is_complete") {
            formData.append(key, Number(todo[key]));
        }
    });

    // added PUT for api to handle this as a PUT request instead of a POST
    formData.append("_method", "PUT");

    // set axios multipart/form-data to support image upload
    const config = {
        headers: {
            "content-type": "multipart/form-data",
        },
    };

    return axios.post(`${apiEndPoint}/${todo.id}`, formData, config);
}

/**
 * Function requests Api to store new todo
 * @param {*} todo
 * @returns
 */
export function storeTodo(todo) {
    const formData = new FormData();

    // append to form data
    Object.keys(todo).forEach((key) => {
        if (todo[key]) formData.append(key, todo[key]);
    });

    // set axios multipart/form-data to support image upload
    const config = {
        headers: {
            "content-type": "multipart/form-data",
        },
    };

    return axios.post(apiEndPoint, formData, config);
}

export default {
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo,
    storeTodo,
};
