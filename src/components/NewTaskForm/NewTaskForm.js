import React from "react";

import "./NewTaskForm.css"

function NewTaskForm({className, placeholder}) {
    return <input className={className} placeholder={placeholder} autoFocus={true}></input>;
};

export default NewTaskForm;