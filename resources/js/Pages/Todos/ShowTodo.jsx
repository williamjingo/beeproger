import React from "react";
import Button from "../../components/button.component";

const ShowTodo = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="card">
                        <h5 className="card-header">
                            <i className="bi bi-file-plus" /> Todo Detal
                        </h5>
                        <div className="card-body">
                            Todo Detail
                            <Button type="back" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowTodo;
