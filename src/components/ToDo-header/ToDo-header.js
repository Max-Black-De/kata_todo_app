import React from "react";

import NewTaskForm from "../new-task-form";
import "./todo-header.css"

const TodoHeader = ({headerClass, newTaskClass, placeholder}) => {
    return (
        <header className={ headerClass }>
            <h1>todos</h1>
            <NewTaskForm className={ newTaskClass } placeholder={ placeholder } autoFocus />
        </header>
    )
}

export default TodoHeader;