import React from "react";

import TodoFilterList from "../ToDo-filter-list";
import TodoButton from "../ToDo-Button";

import "./ToDo-footer.css"

function TodoFooter({ className }) { 
    return (
    <footer className="footer">
        <span className="todo-count">1 items left</span>
        <TodoFilterList className="filters"/>
        <TodoButton label="Clear completed" className="clear-completed" />
    </footer>
    );
};

export default TodoFooter;