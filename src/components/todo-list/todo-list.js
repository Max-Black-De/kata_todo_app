import React from "react";
import TodoListItem from "../todo-list-item";

import "./todo-list.css"

const TodoList = (props) => {
    const {editItem, tasksData, onDoneItem, addItemClass, onDeleteItem} = props;

    return (
        <ul className="todo-list">
            {tasksData.map((taskData) => (
                    <TodoListItem
                        key={taskData.id}
                        {...taskData}
                        editItem={(value) => {editItem(value, taskData.id)}}
                        onDoneItem={ () => {onDoneItem(taskData.id)}}
                        addItemClass={ () => {addItemClass(taskData.id)}}
                        onDeleteItem={ () => {onDeleteItem(taskData.id)}}/>
                ))}
        </ul>
    );
};

export default TodoList;