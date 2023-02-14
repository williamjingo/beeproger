import React from "react";
import { Link } from "react-router-dom";

const CreateTodo = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="card">
                        <h5 className="card-header">
                            <i className="bi bi-file-plus" /> Create Todo
                        </h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <input className="form-control form-control-lg" type="text"
                                       placeholder="Title ..." aria-label=".form-control-lg"/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control form-control-lg" rows="3" placeholder="Description"/>
                            </div>

                            <div className="btn-group" role="group">
                                <Link to="/" className="btn btn-dark">
                                    Back
                                </Link>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;
