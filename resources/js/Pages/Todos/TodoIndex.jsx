import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import todoService from "../../services/todoService";

import Pagination from "../../components/pagination/pagination.component";
import DefaultLayout from "../../components/default-layout.component";
import TodoItem from "../../components/todos/todo-item.component";

const renderPageTitle = () => {
    return (
        <>
            <i className="bi bi-list-task" /> Todos{" "}
            <Link to="create-todo" className="btn btn-primary btn-sm float-end">
                <i className="bi bi-file-plus" /> Create Todo
            </Link>
        </>
    );
};

const TodoIndex = () => {
    const [data, setData] = useState([]);
    const [notice, setNotice] = useState(null);

    /**
     * Function retrieves to
     */
    const getTodos = async (page = 1) => {
        try {
            const { data } = await todoService.getTodos(page);
            setData(data);
        } catch (error) {
            handleError(error);
        }
    };

    /**
     * Function handles change in pages
     * @param {*} page
     */
    const handlePageChange = async (page) => {
        await getTodos(page);
    };

    useEffect(() => {
        getTodos();
    }, []);

    /**
     * Function triggers todo delete and updates states
     * @param {*} todo
     */
    const handleOnDelete = async (todo) => {
        try {
            // trigger api to delete todo
            await todoService.deleteTodo(todo);

            // filter deleted todo from state
            setData((current) => {
                return {
                    ...current,
                    data: current.data.filter((obj) => {
                        if (obj.id != todo.id) return obj;
                    }),
                };
            });

            // update table
            getTodos();
        } catch (error) {
            handleError(error);
        }
    };

    const handleOnComplete = async (todo) => {
        try {
            const updatedTodo = { ...todo, is_complete: !todo.is_complete };
            // trigger todo api update request
            await todoService.updateTodo(updatedTodo);

            // update state
            setData((current) => {
                return {
                    ...current,
                    data: current.data.map((obj) => {
                        if (obj.id === todo.id) return updatedTodo;

                        return obj;
                    }),
                };
            });
        } catch (error) {
            handleError(error);
        }
    };

    const handleError = ({ response }) => {
        const { status } = response;

        if (status !== 422) {
            setNotice({
                type: "danger",
                message:
                    "Error! we are having trouble proccessing this request, Please try again later",
            });

            return;
        }
    };

    const { data: todos } = data;

    return (
        <DefaultLayout title={renderPageTitle()} notice={notice || null}>
            <>
                <ul className="list-group list-group-flush border-bottom mb-5 py-2">
                    {todos &&
                        todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onDelete={handleOnDelete}
                                onComplete={handleOnComplete}
                            />
                        ))}
                </ul>

                <Pagination data={data} onPageChange={handlePageChange} />
            </>
        </DefaultLayout>
    );
};

export default TodoIndex;
