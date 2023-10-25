import React from "react";
import { PropTypes } from 'prop-types';

import "./todo-filter-list.css"

function TodoFilterList({className, sortTasks, currentStatus}) {

    let filterId = 111
    const filterLabels = ["All", "Active", "Completed"]
    const button = filterLabels.map(label => {
        return( 
            <li key={filterId++}>
                <button
                    className={currentStatus === label ? "selected" : ""}
                    onClick={(e) => sortTasks(e.target.innerText)}> { label } </button> 
            </li>)
        
    });

    return (
        <ul className={className}>
            {button}
        </ul>
    )
};
TodoFilterList.propDefault = {
    currentStatus: 'active'
};

TodoFilterList.propTypes = {
    className: PropTypes.string.isRequired,
    sortTasks: PropTypes.func.isRequired,
    currentStatus: PropTypes.string
};

export default TodoFilterList;