import React from "react";

import { Link } from "react-router-dom";

const TodoItem = ({ todo, onDelete, onComplete }) => {
    const { id, title, is_complete } = todo;
    const edit_path = `/edit-todo/${id}`;
    const show_path = `/show-todo/${id}`;

    return (
        <li className="list-group-item d-flex">
            <input
                className="form-check-input me-3"
                type="checkbox"
                value=""
                checked={is_complete}
                onChange={() => onComplete(todo)}
            />
            <label className="form-check-label flex-grow-1">{title}</label>

            <Link to={edit_path} className="btn btn-primary btn-sm me-1">
                <i className="bi bi-pencil-square" />
            </Link>

            <Link to={show_path} className="btn btn-dark btn-sm me-1">
                <i className="bi bi-folder-symlink" />
            </Link>

            <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(todo)}
            >
                <i className="bi bi-trash3" />
            </button>
        </li>
    );
};

export default TodoItem;
