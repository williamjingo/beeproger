import React from "react";
import Button from "../../components/button.component";

const EditTodo = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="card">
                        <h5 className="card-header">
                            <i className="bi bi-file-plus" /> Update Todo
                        </h5>
                        <div className="card-body">
                            <p>Update Todo</p>
                            <Button type="back" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTodo;
