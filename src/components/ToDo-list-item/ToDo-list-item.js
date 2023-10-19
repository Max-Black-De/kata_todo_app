import React, {Component} from 'react';
import TodoLabel from '../todo-label';

import './todo-list-item.css'
export default class TodoListItem extends Component {

    state = {
        checked: false,
        editing: false,
    }

    changeHandler = () => {
        this.setState(({ checked }) => {
            return {
                checked: !checked
            }
        });
    };
    changeClassHandle = () => {
        this.setState(({ editing }) => {
            return {
                editing: !editing
            }
        })
    };
    submitHandler = (event) => {
        event.preventDefault()
        this.props.onChangeItem(event, this.props.id)
        this.changeClassHandle()
    };

    render() {
        const { itemClassName } = this.props;
        const { checked, editing } = this.state;
        
        let addedClass = itemClassName
        if(checked) {
            addedClass += ' completed';
        }
        if(editing) {
            addedClass += ' editing';
        }

        return (
        <li className={ addedClass }>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    onChange = { this.changeHandler }/>
                <TodoLabel
                    taskProps={ this.props.taskProps }
                    creatingTimeSpanProps={ this.props.creatingTimeSpanProps }
                    />
                <button
                    onClick={ this.changeClassHandle }
                    className={ this.props.editBtnClass } ></button>
                <button
                    onClick={ this.props.onDeleteItem }
                    className={ this.props.destroyBtnClass } ></button>
            </div>
            <form onSubmit={ this.submitHandler }>
                <input
                    autoFocus
                    type="text"
                    className="edit"
                    placeholder="Editing task"/>
            </form>
        </li>
    )
    }
};