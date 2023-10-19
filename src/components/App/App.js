import React, {Component} from "react";

import ToDoHeader from '../todo-header';
import TodoMainSection from '../todo-main-section';

import './App.css';

export default class App extends Component {

    keysId = 777;

    state = {
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
            label,
            done: false,
            editing: false
        }
    };
    addNewTas = (label) => {
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
    editItem = (value, id) => {
        this.setState(({todoListItemsData}) => {
            const idx = todoListItemsData.findIndex(todo => todo.id === id);
            const oldItem = todoListItemsData[idx];
            const editedItem = {...oldItem, label: value};
            
            return {
                todoListItemsData: [
                    ...todoListItemsData.slice(0, idx),
                    editedItem,
                    ...todoListItemsData.slice(idx + 1)
                ]
            }
        });
    };
    deleteItem = (id) => {
        this.setState(({todoListItemsData}) => {
            const idx = todoListItemsData.findIndex(todo => todo.id === id);
            
            return {
                todoListItemsData: [
                    ...todoListItemsData.slice(0, idx),
                    ...todoListItemsData.slice(idx+1)
                ]
            }
        })
    };
    toggleProperty = (id, arr, propName) => {
            const idx = arr.findIndex(todo => todo.id === id);
            const oldItem = arr[idx];
            const editedItem = {
                        ...oldItem,
                        [propName]: !oldItem[propName]
                    };
            
            return [
                    ...arr.slice(0, idx),
                    editedItem,
                    ...arr.slice(idx+1)
                ]
    };
    onToggleDone = (id) => {
        this.setState(({todoListItemsData}) => {
            return {
                todoListItemsData: this.toggleProperty(id, todoListItemsData, 'done')
            } 
        });
    };
    onToggleEditing = (id) => {
        this.setState(({todoListItemsData}) => {

            return {
                todoListItemsData: this.toggleProperty(id, todoListItemsData, 'editing')
            }
        });
    };


    render() {

        const countDone = this.state.todoListItemsData.filter(el => !el.done).length;
        return (
        <section className="todoapp">
            <ToDoHeader
                    newTaskCreator={this.addNewTas}
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
                    editItem={ this.editItem }
                    onDeleteItem={ this.deleteItem}
                    onDoneItem={this.onToggleDone}
                    addItemClass={this.onToggleEditing}
                    itemsData={this.state.todoListItemsData}
                    footerSpanClassName={'todo-count'}
                    footerSpanCounter={ countDone }
                    footerButtonProps={this.state.footerButtonProps}
                    filterButtonProps={this.state.filterButtonProps}
                    creatingTimeSpanProps={this.state.todoListSpanProps}/>
        </section>
    );
    }
};