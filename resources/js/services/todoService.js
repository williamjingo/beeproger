const apiEndPoint = "/api/todos";

/**
 * Queries backend todos
 * @param {*} page
 * @returns
 */
export function getTodos(page = null) {
    if (page) {
        // return page todos
    }

    return axios.get(apiEndPoint);
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

export default {
    getTodos,
    updateTodo,
    deleteTodo,
};
