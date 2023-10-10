import React from "react";

import "./ToDo-Button.css"

function TodoButton({label, className}) {
    return <button className={className} > { label } </button>;
};

export default TodoButton;