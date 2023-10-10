import React from 'react';
import TodoSpan from "../Todo-span"

import "./Todo-label.css";

function TodoLabel(props) {
    return(
        <label>
            <TodoSpan className="description" label="Completed task"/>
            <TodoSpan className="created" label="created 17 seconds ago"/>
        </label>
    )
}

export default TodoLabel