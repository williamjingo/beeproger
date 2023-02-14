import React from "react";
import Button from "../../components/button.component";
import DefaultLayout from "../../components/default-layout.component";

const ShowTodo = () => {
    return (
        <DefaultLayout>
            <>
                Todo Detail
                <br />
                <Button type="back" />
            </>
        </DefaultLayout>
    );
};

export default ShowTodo;
