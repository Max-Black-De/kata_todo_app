import React from "react";

import TodoFilterList from "../todo-filter-list";
import TodoButton from "../todo-button";

import "./todo-footer.css"

function TodoFooter(props) { 
    return (
    <footer className={props.todoFooterClass}>
        <span className={props.footerSpanClassName}>{props.footerSpanCounter} items left</span>
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