import React from "react";

import NewTaskForm from "../NewTaskForm";
import "./ToDo-header.css"

const TodoHeader = (props) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm className="new-todo" placeholder="What needs to be done?" autoFocus />
        </header>
    )
}

export default TodoHeader;