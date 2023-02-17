import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import todoService from "../../services/todoService";

import Button from "../../components/button.component";
import DefaultLayout from "../../components/default-layout.component";

const ShowTodo = () => {
    const [todo, setTodo] = useState(null);

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

    if (!todo) return null;

    const { title, description, image } = todo;

    return (
        <DefaultLayout>
            <div className="card">
                {image && (
                    <img
                        src={image.path}
                        className="card-img-top"
                        alt={image.title}
                    />
                )}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>

                    <Button type="back" />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default ShowTodo;
