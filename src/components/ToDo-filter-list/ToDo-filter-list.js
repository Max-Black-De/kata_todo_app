import React from "react";

import TodoButton from "../ToDo-Button";
import "./ToDo-filter-list.css"

function TodoFilterList(props) {
    return (
        <ul className="filters">
            <li>
                <TodoButton label="All" className="selected" />
            </li>
            <li>
                <TodoButton label="Active" className="active" />
            </li>
            <li>
                <TodoButton label="Completed" className="completed" />
            </li>
        </ul>
    )
};

export default TodoFilterList;