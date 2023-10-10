import React from 'react';
import TodoButtons from "../ToDo-Button";
import TodoLabel from '../Todo-label';

import './ToDo-list-item.css'

const TodoListItem = ({className}) => {
    return (
        <li className={className}>
            <div className="view">
                <input type="checkbox" className="toggle"/>
                <TodoLabel />
                <TodoButtons className="icon icon-edit"/>
                <TodoButtons className="icon icon-destroy"/>
            </div>
            <input type="text" className="edit" placeholder="Editing task"/>
        </li>
    )
};

export default TodoListItem;