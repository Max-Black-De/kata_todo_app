import React, {Component} from "react";

import "./new-task-form.css"

export default class NewTaskForm extends Component {

    state = {
        newTaskItem: ""
    };
    createTask = (event) => {
        this.setState({
            newTaskItem: event.target.value,
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        if(event.target[0].value) {
            this.props.submitNewTask(this.state.newTaskItem);
            this.setState({
                newTaskItem: ''
            })
        };
    };

    render () {
        return (
        <form onSubmit={this.onSubmit}>
            <input
                autoFocus
                onChange={(event) => {this.createTask(event)}}
                className={this.props.className}
                placeholder={this.props.placeholder}
                value={this.state.newTaskItem}
            />
        </form>
    );
    }

    
};