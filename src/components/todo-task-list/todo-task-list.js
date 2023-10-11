import React from "react";
import TodoListItem from "../todo-list-item";

import "./todo-task-list.css"

const TodoList = (props) => {

    const item = props.itemsData.map((itemData) => {
        const { id,  className} = itemData
        return (
            <TodoListItem
                        key={id}
                        className={className}
                        todoListSpanProps={props.todoListSpanProps}
                        todoListButtonProps={props.todoListButtonProps}/>
        );
    });
    return (
        <ul className={props.listClassName}>
            { item }
        </ul>
    );
};

export default TodoList;