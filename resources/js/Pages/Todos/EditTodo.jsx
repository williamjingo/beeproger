import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import todoService from "../../services/todoService";

import Button from "../../components/button.component";
import DefaultLayout from "../../components/default-layout.component";
import Notice from "../../components/alerts/notice.component";
import TextInput from "../../components/form/text-input.component";
import TextareaInput from "../../components/form/textarea-input.component";
import FileInput from "../../components/form/file-input.component";

const renderPageTitle = () => {
    return <span>Update Todo</span>;
};

const EditTodo = () => {
    const [todo, setTodo] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [notice, setNotice] = useState(null);

    const [loading, setLoading] = useState(false);

    // Navigation
    const { id } = useParams();

    // query server for todo
    const getTodo = async (id) => {
        const { data } = await todoService.getTodo(id);
        setTodo(data.data);
    };

    useEffect(() => {
        getTodo(id);
    }, [id]);

    if (!todo) return;

    // handle on change
    const handOnInputChange = () => {};

    const handleOnSubmit = () => {};

    return (
        <DefaultLayout title={renderPageTitle()}>
            <>
                {notice && <Notice {...notice} />}

                <div className="mb-3">
                    <TextInput
                        name="title"
                        value={todo.title}
                        error={formErrors.title}
                        onChange={handOnInputChange}
                    />
                </div>
                <div className="mb-3">
                    <TextareaInput
                        name="description"
                        value={todo.description}
                        error={formErrors.description}
                        onChange={handOnInputChange}
                    />
                </div>
                <div className="mb-3">
                    <FileInput
                        name="image"
                        imageObj={todo.image}
                        error={formErrors.image}
                        onChange={handOnInputChange}
                    />
                </div>

                <div className="btn-group" role="group">
                    <Button type="back" />
                    <Button
                        type="submit"
                        label="Update Todo"
                        onSubmit={handleOnSubmit}
                        disabled={loading}
                    />
                </div>
            </>
        </DefaultLayout>
    );
};

export default EditTodo;
