import React, {Component} from "react";

import NewTaskForm from "../new-task-form";
import TodoList from "../todo-list";
import TodoFooter from "../todo-footer";

import './App.css';

export default class App extends Component {

    keysId = 777;

    state = {
        tasks: [],
        filter: "active"
    };
    createItem = (label) => {
            return {
                        label,
                        id: this.keysId++,
                        done: false,
                        editing: false
                    }
    };
    addNewTask = (label) => {
        const newItem = this.createItem(label)
        this.setState(({tasks}) => {
            return{
                tasks : [
                    ...tasks,
                    newItem
                ]
            }
        });
    };
    editItem = (value, id) => {
        this.setState(({tasks}) => {
            const idx = tasks.findIndex(todo => todo.id === id);
            const oldItem = tasks[idx];
            const editedItem = {...oldItem, label: value};
            
            return {
                tasks: [
                    ...tasks.slice(0, idx),
                    editedItem,
                    ...tasks.slice(idx + 1)
                ]
            }
        });
    };
    deleteItem = (id) => {
        this.setState(({tasks}) => {
            const idx = tasks.findIndex(todo => todo.id === id);
            
            return {
                tasks: [
                    ...tasks.slice(0, idx),
                    ...tasks.slice(idx+1)
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
        this.setState(({tasks}) => {
            return {
                tasks: this.toggleProperty(id, tasks, 'done')
            } 
        });
    };
    onToggleEditing = (id) => {
        this.setState(({tasks}) => {

            return {
                tasks: this.toggleProperty(id, tasks, 'editing')
            }
        });
    };
    clearCompleted = () => {
        this.setState(({tasks}) => {
            return {
                    tasks: tasks.filter(t => (!t.done))
            }
        });
    };
    getTasks = () => {
        const {tasks, filter} = this.state;
        if(filter === 'Active'){
            return tasks.filter(t => (!t.done));
        };
        if(filter === 'Completed'){
            return tasks.filter(t => (t.done));
        };
        return tasks;
    };
    sortTasks = (status) => {
        this.setState(() => {
            return {
                filter: status
            };
        });
    }


    render() {
        const countDone = this.state.tasks.filter(el => !el.done).length;
        return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm
                    className="new-todo"
                    placeholder={ "What needs to be done?" }
                    submitNewTask={ this.addNewTask }
                    />
            </header>
            <section className="main">
                <TodoList
                    tasksData={this.getTasks()}
                    onDeleteItem={this.deleteItem}
                    editItem={this.editItem}
                    addItemClass={this.onToggleEditing}
                    onDoneItem={this.onToggleDone}/>
                <TodoFooter
                    clearCompleted={this.clearCompleted}
                    sortTasks={this.sortTasks}
                    footerSpanCounter={countDone}/>
            </section>
        </section>
    );
    }
};