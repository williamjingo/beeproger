import React from "react";
import Button from "../../components/button.component";
import DefaultLayout from "../../components/default-layout.component";

const EditTodo = () => {
    return (
        <DefaultLayout>
            <>
                <p>Update Todo</p>
                <Button type="back" />
            </>
        </DefaultLayout>
    );
};

export default EditTodo;
