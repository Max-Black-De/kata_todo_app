import React from "react";
import TodoListItem from "../todo-list-item";
import { PropTypes } from 'prop-types';

import "./todo-list.css"

function TodoList({editItem, tasksData, onDoneItem, addItemClass, onDeleteItem}){
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

TodoList.propTypes = {
    editItem: PropTypes.func.isRequired,
    tasksData: PropTypes.array.isRequired,
};

export default TodoList;