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
    return axios.put(`${apiEndPoint}/${todo.id}`, { ...todo });
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
