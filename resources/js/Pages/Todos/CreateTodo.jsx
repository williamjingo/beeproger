import React from "react";
import Button from "../../components/button.component";
import DefaultLayout from "../../components/default-layout.component";

const CreateTodo = () => {
    return (
        <DefaultLayout>
            <>
                <div className="mb-3">
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Title ..."
                        aria-label=".form-control-lg"
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control form-control-lg"
                        rows="3"
                        placeholder="Description"
                    />
                </div>

                <div className="btn-group" role="group">
                    <Button type="back" />
                    <Button type="submit" />
                </div>
            </>
        </DefaultLayout>
    );
};

export default CreateTodo;
