import React from 'react';

import "./Todo-label.css"

function TodoLabel(props) {

    const todoSpan = props.todoListSpanProps.map(spanData => {
        const {id, className, label } = spanData;
        return <span key={id} className={ className }>{ label }</span>;
    });

    return(
        <label>
            { todoSpan }
        </label>
    )
};

export default TodoLabel