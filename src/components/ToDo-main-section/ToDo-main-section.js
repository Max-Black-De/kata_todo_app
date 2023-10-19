import React from "react";

import TodoList from "../todo-task-list";
import TodoFooter from "../todo-footer";

import "./todo-main-section.css"

function TodoMainSection(props) {

    return(
        <section className={ props.mainSectionClass }>
            <TodoList
                itemsData={props.itemsData}
                onDeleteItem={props.onDeleteItem}
                onChangeItem={props.onChangeItem}
                listClassName={props.todoListClass}
                editBtnClass={props.editBtnClass}
                destroyBtnClass={props.destroyBtnClass}
                creatingTimeSpanProps={props.creatingTimeSpanProps}/>
            <TodoFooter
                todoFooterClass={props.todoFooterClass}
                filterButtonProps={props.filterButtonProps}
                footerSpanClassName={props.footerSpanClassName}
                footerSpanCounter={props.footerSpanCounter}
                footerButtonProps={props.footerButtonProps}
                filterListClassName={props.filterListClassName}/>
        </section>
    )
};

export default TodoMainSection;