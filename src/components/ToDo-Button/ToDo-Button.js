import React from "react";

import "./ToDo-Button.css"

function TodoButton(props) {
    return <button key={props.id} className={props.className} > { props.label } </button>;
};

export default TodoButton;