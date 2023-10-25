import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { PropTypes } from 'prop-types';

import './todo-list-item.css'

const TodoListItem = (props) => {
    const submitHandler = (event) => {
        event.preventDefault()
        if(event.target.editedTask.value.trim() !== '') {
            props.editItem(event.target.editedTask.value);
        }
        props.addItemClass() // вызываем функцию изменения класса кнопки edit
    };
    const onHandleClick = () => {
        props.addItemClass() // вызываем функцию изменения класса кнопки edit
    };
    
    const { label, done, editing, onDoneItem, onDeleteItem, date } = props;
    let liClassName = 'newTask';
    if(done) {
        liClassName += ' completed';
    };
    if(editing) {
        liClassName += ' editing';
    };

    return (
        <li className={liClassName}>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    onChange = {onDoneItem}/>

                <label>
                    <span className="description">{ label }</span>
                    <span className="created">{ `Created ${formatDistanceToNow(date, {includeSeconds: true}, {addSuffix: true})}` }</span>
                </label>
                <button
                    onClick={ onHandleClick }
                    className="icon icon-edit"></button>
                <button
                    onClick={onDeleteItem}
                    className="icon icon-destroy"></button>
            </div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    className="edit"
                    name="editedTask"
                    defaultValue={label}
                    contentEditable='true'/>
            </form>
        </li>
    );
};

TodoListItem.defaultProps = {
    done: false,
    editing: false
};
TodoListItem.propTypes = {
    label: PropTypes.string.isRequired,
    done: PropTypes.bool,
    editing: PropTypes.bool,
    editItem: PropTypes.func.isRequired,
    onDoneItem: PropTypes.func.isRequired,
    addItemClass: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
};

export default TodoListItem 