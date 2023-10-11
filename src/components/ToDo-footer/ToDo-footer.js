import React from "react";

import TodoFilterList from "../ToDo-filter-list";
import TodoButton from "../ToDo-Button";

import "./ToDo-footer.css"

function TodoFooter(props) { 
    return (
    <footer className={props.className}>
        <span className="todo-count">1 items left</span>
        <TodoFilterList
                    className={props.filterListClassName}
                    filterButtonProps={props.filterButtonProps}/>
        <TodoButton
                    className={props.footerButtonProps.className}
                    label={props.footerButtonProps.label} />
    </footer>
    );
};

export default TodoFooter;