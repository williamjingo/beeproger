import React, { Component } from "react";
import { Routes, Route, redirect } from "react-router-dom";

import TodoIndex from "../Pages/Todos/TodoIndex";
import ShowTodo from "../Pages/Todos/ShowTodo";
import EditTodo from "../Pages/Todos/EditTodo";
import CreateTodo from "../Pages/Todos/CreateTodo";

class Main extends Component {
    render() {
        return (
            <Routes>
                <Route index element={<TodoIndex />} />
                <Route path="/show-todo/:id" element={<ShowTodo />} />
                <Route path="/edit-todo/:id" element={<EditTodo />} />
                <Route path="/create-todo" element={<CreateTodo />} />

                <Route path="*" element={<TodoIndex to="/" />} />
            </Routes>
        );
    }
}

export default Main;
