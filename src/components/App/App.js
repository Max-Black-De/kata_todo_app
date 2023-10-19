import React, {Component} from "react";

import ToDoHeader from '../todo-header';
import TodoMainSection from '../todo-main-section';

import './App.css';

export default class App extends Component {

    keysId = 777;

    state ={
        todoListItemsData: [
            // this.createItem('Drink coffee'),
            // this.createItem('Have a lunch'),
            // this.createItem('Make an awesome app'),
            // this.createItem('Read book'),
            // this.createItem('Get an awesome offer')
        ],

        todoListSpanProps: {
            creatingTimeClassName: "created", creatingTimeLabel: "created 17 seconds ago"
        },

        filterButtonProps: [
            {className: "all selected", id: "keySelectedBtn", label: "All"},
            {className: "active", id: "keyActiveBtn", label: "Active"},
            {className: "completed", id: "keyCompletedBtn", label: "Completed"},
        ],

        footerButtonProps: {
            className: "clear-completed",
            id: "keyClearBtn",
            label: "Clear completed"
        }
    };
    createItem = (label) => {
        return {
            itemClassName: "created",
            id: `${ this.keysId++ }`,
            taskClassName: "description",
            label
        }
    };
    addNewTaskHandler = (event) => {
        event.preventDefault();
        const label = event.target[0].value
        event.target[0].value = ''
        const newItem = this.createItem(label)
        this.setState(({todoListItemsData}) => {
            return{
                todoListItemsData : [
                    ...todoListItemsData,
                    newItem
                ]
            }
        });
    };
    editItemHandler = (event, id) => {
        event.preventDefault();
        const value = event.target[0].value
        this.setState(({todoListItemsData}) => {
            const idx = todoListItemsData.findIndex(todo => todo.id === id);
            const oldItem = todoListItemsData[idx];
            const editedItem = {...oldItem, label: value};
            const newItemsArray = [
                ...todoListItemsData.slice(0, idx),
                editedItem,
                ...todoListItemsData.slice(idx + 1)
            ];
            return {
                todoListItemsData: newItemsArray
            }
        });
    };
    deleteItemHandles = (id) => {
        this.setState(({todoListItemsData}) => {
            const idx = todoListItemsData.findIndex(todo => todo.id === id);
            
            return {
                todoListItemsData: [...todoListItemsData.slice(0, idx), ...todoListItemsData.slice(idx+1)],
            }
        })
    };


    render() {

        return (
        <section className="todoapp">
            <ToDoHeader
                    newTaskCreator={this.addNewTaskHandler}
                    headerClass="header"
                    newTaskClass="new-todo"
                    placeholder="What needs to be done?"/>

            <TodoMainSection
                    mainSectionClass="main"
                    todoFooterClass="footer"
                    todoListClass="todo-list"
                    filterListClassName="filters"
                    editBtnClass={"icon icon-edit"}
                    destroyBtnClass={"icon icon-destroy"}
                    onChangeItem={ this.editItemHandler }
                    onDeleteItem={ this.deleteItemHandles}
                    itemsData={this.state.todoListItemsData}
                    footerSpanClassName={'todo-count'}
                    footerSpanCounter={ this.state.todoListItemsData.length }
                    footerButtonProps={this.state.footerButtonProps}
                    filterButtonProps={this.state.filterButtonProps}
                    creatingTimeSpanProps={this.state.todoListSpanProps}/>
        </section>
    );
    }
};