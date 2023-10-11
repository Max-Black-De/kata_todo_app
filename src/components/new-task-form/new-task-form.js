import React from "react";

import "./new-task-form.css"

function NewTaskForm({className, placeholder}) {
    return <input className={className} placeholder={placeholder} autoFocus></input>;
};

export default NewTaskForm;