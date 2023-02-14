import React from "react";

const DefaultLayout = ({ children }) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="card">
                        <h5 className="card-header">
                            <i className="bi bi-file-plus" /> Create Todo
                        </h5>
                        <div className="card-body">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
