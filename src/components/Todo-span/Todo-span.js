import React from 'react';

import "./Todo-span.css";

function TodoSpan({label, className}) {
    return <span className={ className }>{ label }</span>
};

export default TodoSpan