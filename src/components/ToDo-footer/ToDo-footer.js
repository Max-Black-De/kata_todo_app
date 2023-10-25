import React from "react";

import TodoFilterList from "../todo-filter-list";

import "./todo-footer.css"

function TodoFooter({footerSpanCounter, clearCompleted, sortTasks, currentStatus}) { 
    return (
    <footer className="footer">
        <span className="todo-count">{footerSpanCounter} items left</span>
        <TodoFilterList
                className="filters"
                currentStatus={currentStatus}
                sortTasks={sortTasks}
            />
        <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
    );
};

export default TodoFooter;