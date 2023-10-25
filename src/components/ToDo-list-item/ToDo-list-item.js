import React, {Component} from 'react';
import { formatDistanceToNow } from 'date-fns';

import './todo-list-item.css'
export default class TodoListItem extends Component {

    submitHandler = (event) => {
        event.preventDefault()
        if(event.target.editedTask.value.trim() !== '') {
            this.props.editItem(event.target.editedTask.value);
        }
        this.props.addItemClass() // вызываем функцию изменения класса кнопки edit
    };
    onHandleClick = () => {
        this.props.addItemClass() // вызываем функцию изменения класса кнопки edit
    };
    
    render() {
        const { label, done, editing, onDoneItem, onDeleteItem, date } = this.props;
        let liClassName = 'newTask';
        if(done) {
            liClassName += ' completed';
        }
        if(editing) {
            liClassName += ' editing';
        }

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
                        onClick={ this.onHandleClick }
                        className="icon icon-edit"></button>
                    <button
                        onClick={onDeleteItem}
                        className="icon icon-destroy"></button>
                </div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        className="edit"
                        name="editedTask"
                        defaultValue={label}
                        contentEditable='true'/>
                </form>
            </li>
        );
    }
    
};