import React from "react";

import TodoList from "../ToDo-list";
import TodoFooter from "../ToDo-footer";

import "./ToDo-main-section.css"

function TodoMainSection() {
    return(
        <section className="main">
            <TodoList />
            <TodoFooter className="footer"/>
        </section>
    )
};

export default TodoMainSection;