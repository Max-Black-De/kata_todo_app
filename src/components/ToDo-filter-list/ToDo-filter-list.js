import React from "react";

import "./todo-filter-list.css"



function TodoFilterList({className}) {

    let filterId = 111
    const filterLabels = ["All", "Active", "Completed"]
    const button = filterLabels.map(label => {
        return (
            <li key={filterId++}>
                <button 
                    className="selected"
                    onClick={(e) => {console.log(e.target)}}> { label } </button> 
            </li>
        )
    });

    return (
        <ul className={className}>
            {button}
        </ul>
    )
};

export default TodoFilterList;