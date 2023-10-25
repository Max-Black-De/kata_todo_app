import React from "react";
import { PropTypes } from 'prop-types';

import "./new-task-form.css"

function NewTaskForm({className, placeholder, submitNewTask}){
    const onSubmit = (event) => {
        event.preventDefault();
        if(event.target.newTask.value.trim() !== '') {
            submitNewTask(event.target.newTask.value);
            event.target.newTask.value = '';
        };
    };
        return (
        <form onSubmit={onSubmit}>
            <input
                autoFocus
                name="newTask"
                className={className}
                placeholder={placeholder}
            />
        </form>
    );
};

NewTaskForm.propTypes = {
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    submitNewTask: PropTypes.func.isRequired
};

export default  NewTaskForm;