import React from "react";

import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

const TodoIndex = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="card">
                        <h5 className="card-header">
                            <i className="bi bi-list-task" /> Todos{" "}
                            <Link
                                to="create-todo"
                                className="btn btn-primary btn-sm float-end"
                            >
                                <i className="bi bi-file-plus" /> Create Todo
                            </Link>
                        </h5>
                        <div className="card-body">
                            <ul className="list-group list-group-flush border-bottom mb-5 ">
                                <li className="list-group-item d-flex">
                                    <input
                                        className="form-check-input me-3"
                                        type="checkbox"
                                        value=""
                                    />
                                    <label className="form-check-label flex-grow-1">
                                        First checkbox
                                    </label>

                                    <Link
                                        to="/edit-todo/1"
                                        className="btn btn-primary btn-sm me-1"
                                    >
                                        <i className="bi bi-pencil-square" />
                                    </Link>

                                    <Link
                                        to="/show-todo/1"
                                        className="btn btn-dark btn-sm me-1"
                                    >
                                        <i className="bi bi-folder-symlink" />
                                    </Link>

                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                    >
                                        <i className="bi bi-trash3" />
                                    </button>
                                </li>
                            </ul>

                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoIndex;
