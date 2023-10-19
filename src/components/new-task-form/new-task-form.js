import React from "react";

import "./new-task-form.css"

function NewTaskForm({className, placeholder, submitNewTask}) {
    return (
        <form onSubmit={submitNewTask}>
            <input
                autoFocus
                className={className}
                placeholder={placeholder}
            ></input>
        </form>
    );
};

export default NewTaskForm;