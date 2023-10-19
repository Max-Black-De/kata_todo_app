import React, {Component} from 'react';
import TodoLabel from '../todo-label';

import './todo-list-item.css'
export default class TodoListItem extends Component {

    state = {
        editedItem: ""
    };

    editTaskValue = (event) => {
        this.setState({
            editedItem: event.target.value
        });
    };
    
    submitHandler = (event) => {
        event.preventDefault()
        if(event.target[0].value){
            this.props.editItem(this.state.editedItem, this.props.id)
            this.setState({
                editedItem: ''
            });
        };
        this.props.addItemClass()
    };

    render() {
    const { itemClassName } = this.props;
    const { done, editing } = this.props.taskProps;
    let addedClass = itemClassName;
    if(done) {
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
                    onChange = { this.props.onDoneItem }/>
                <TodoLabel
                    taskProps={ this.props.taskProps }
                    creatingTimeSpanProps={ this.props.creatingTimeSpanProps }
                    />
                <button
                    onClick={ this.props.addItemClass }
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
                    onChange={ this.editTaskValue }
                    // value={'Hello'}
                    />
            </form>
        </li>
    );


    }
    
};