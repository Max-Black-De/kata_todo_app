import React from 'react';

import "./todo-label.css"

function TodoLabel({ taskProps, creatingTimeSpanProps }) {
    
    const { taskClassName, label } = taskProps;
    const {creatingTimeClassName, creatingTimeLabel } = creatingTimeSpanProps;
    
    return(
        <label>
            <span className={ taskClassName }>{ label }</span>
            <span className={ creatingTimeClassName }>{ creatingTimeLabel }</span>
        </label>
    )
};

export default TodoLabel