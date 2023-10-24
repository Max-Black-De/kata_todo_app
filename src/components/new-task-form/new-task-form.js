import React, {Component} from "react";

import "./new-task-form.css"

export default class NewTaskForm extends Component {


    onSubmit = (event) => {
        event.preventDefault();
        if(event.target.newTask.value.trim() !== '') {
            this.props.submitNewTask(event.target.newTask.value);
            event.target.newTask.value = '';
        };
    };

    render () {
        return (
        <form onSubmit={this.onSubmit}>
            <input
                autoFocus
                name="newTask"
                className={this.props.className}
                placeholder={this.props.placeholder}
            />
        </form>
    );
    }
};