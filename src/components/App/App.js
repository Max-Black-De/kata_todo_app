import React from "react";

import ToDoHeader from '../ToDo-header';
import TodoMainSection from '../ToDo-main-section';

import './App.css';

const App = () => {
    const todoListItemClass = [
        {className: "completed", id: "keyCompleted"},
        {className: "editing", id: "keyEditing"},
        {className: "", id: "keyNone"},
    ]
    const filterButtonProps = [
        {className: "selected", id: "keySelectedBtn", label: "All"},
        {className: "active", id: "keyActiveBtn", label: "Active"},
        {className: "completed", id: "keyCompletedBtn", label: "Completed"},
    ]
    const footerButtonProps = {
        className: "clear-completed",
        id: "keyClearBtn",
        label: "Clear completed"
    }
    const todoListButtonProps = [
        {className: "icon icon-edit", id: "keyBtnEdit"},
        {className: "icon icon-destroy", id: "keyBtnDestroy"},
    ]
    const todoListSpanProps = [
        {className: "description", label: "Completed task", id: "keySpanEdit"},
        {className: "created", label: "created 17 seconds ago", id: "keyBtnDestroy"},
    ]

    return (
        <section className="todoapp">
            <ToDoHeader
                    headerClass="header"
                    newTaskClass="new-todo"
                    placeholder="What needs to be done?"/>
            <TodoMainSection
                    mainSectionClass="main"
                    todoListClass="todo-list"
                    todoFooterClass="footer"
                    filterListClassName="filters"
                    itemsData={todoListItemClass}
                    footerButtonProps={footerButtonProps}
                    filterButtonProps={filterButtonProps}
                    todoListSpanProps={todoListSpanProps}
                    todoListButtonProps={todoListButtonProps}/>
        </section>
    );
};

export default App;