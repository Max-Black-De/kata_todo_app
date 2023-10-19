import React from "react";
import TodoListItem from "../todo-list-item";

import "./todo-list.css"

const TodoList = (props) => {
    const item = props.itemsData.map((itemData) => {
        const { id, itemClassName, ...taskProps } = itemData
        return (
            <TodoListItem
                        id={ id }
                        key={ id }
                        itemClassName={itemClassName}
                        taskProps={taskProps}
                        editBtnClass={props.editBtnClass}
                        destroyBtnClass={props.destroyBtnClass}
                        onDoneItem={ () => {props.onDoneItem(id)}}
                        addItemClass={ () => {props.addItemClass(id)}}
                        editItem={props.editItem}
                        onDeleteItem={ () => {props.onDeleteItem(id)} }
                        creatingTimeSpanProps={props.creatingTimeSpanProps}/>
        );
    });


    return (
        <ul className={props.listClassName}>
            { item }
        </ul>
    );
};

export default TodoList;