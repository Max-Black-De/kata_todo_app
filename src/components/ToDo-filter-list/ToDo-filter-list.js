import React from "react";

import TodoButton from "../ToDo-Button";
import "./ToDo-filter-list.css"



function TodoFilterList({className, filterButtonProps}) {

    const liItem = filterButtonProps.map(prop => {
        const { id, ...otherProps} = prop;
        return (
            <li key={id}>
                <TodoButton {...otherProps} />
            </li>
        )
    });

    return (
        <ul className={className}>
            { liItem }
        </ul>
    )
};

export default TodoFilterList;