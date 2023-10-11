import React from 'react';
import TodoButtons from "../ToDo-Button";
import TodoLabel from '../Todo-label';

import './ToDo-list-item.css'

const TodoListItem = (props) => {
    const button = props.todoListButtonProps.map(buttonData => {
        const { id, className } = buttonData;
        return(
            <TodoButtons key={id} className={className}/>
        )
    });
    return (
        <li className={props.className}>
            <div className="view">
                <input type="checkbox" className="toggle"/>
                <TodoLabel todoListSpanProps={props.todoListSpanProps}/>
                { button }
            </div>
            <input type="text" className="edit" placeholder="Editing task"/>
        </li>
    )
};

export default TodoListItem;