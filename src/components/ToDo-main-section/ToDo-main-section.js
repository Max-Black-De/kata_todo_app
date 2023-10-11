import React from "react";

import TodoList from "../todo-task-list";
import TodoFooter from "../todo-footer";

import "./todo-main-section.css"

function TodoMainSection(props) {

    return(
        <section className={ props.mainSectionClass }>
            <TodoList
                itemsData={props.itemsData}
                listClassName={props.todoListClass}
                todoListSpanProps={props.todoListSpanProps}
                todoListButtonProps={props.todoListButtonProps}/>
            <TodoFooter
                className={props.todoFooterClass}
                filterButtonProps={props.filterButtonProps}
                footerButtonProps={props.footerButtonProps}
                filterListClassName={props.filterListClassName}/>
        </section>
    )
};

export default TodoMainSection;