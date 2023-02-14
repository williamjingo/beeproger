import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Pagination from "../../components/Pagination";
import DefaultLayout from "../../components/default-layout.component";
import todoService from "../../services/todoService";
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
    const [todos, setTodos] = useState([]);

    /**
     * Function retrieves to
     */
    const getTodos = async (page = null) => {
        const { data } = await todoService.getTodos(page);
        setTodos(data.data);
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
            setTodos((current) =>
                current.filter((obj) => {
                    if (obj.id != todo.id) return obj;
                })
            );
        } catch (error) {
            console.log("error deleting todo");
        }
    };

    const handleOnComplete = async (todo) => {
        try {
            const updatedTodo = { ...todo, is_complete: !todo.is_complete };
            // trigger todo api update request
            await todoService.updateTodo(updatedTodo);

            // update state
            setTodos((current) =>
                current.map((obj) => {
                    if (obj.id === todo.id) return updatedTodo;

                    return obj;
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DefaultLayout title={renderPageTitle()}>
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

                <Pagination />
            </>
        </DefaultLayout>
    );
};

export default TodoIndex;