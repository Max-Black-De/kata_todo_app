import React from "react";
import TodoListItem from "../ToDo-list-item";

import "./ToDo-list.css"

const TodoList = () => {
    return (
        <ul className="todo-list">
            <TodoListItem className="completed"/>
            <TodoListItem className="editing"/>
            <TodoListItem/>
        </ul>
    );
};

export default TodoList;