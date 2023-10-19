import React from "react";

import "./todo-filter-list.css"



function TodoFilterList({className, filterButtonProps}) {

    const liItem = filterButtonProps.map(prop => {
        const { id, className, label} = prop;
        return (
            <li key={id}>
                <button className={ className } > { label } </button> 
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