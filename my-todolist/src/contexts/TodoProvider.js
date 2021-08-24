import React, { Component } from "react";
import TodoContext from "../contexts/TodoContext";

export default class TodoProvider extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: [
                { id: 0, title: "Go to School to day", isComplete: false },
                { id: 1, title: "Do HomeWork", isComplete: true },
                { id: 2, title: "Go to Library", isComplete: false },
                { id: 3, title: "Work from Home", isComplete: false }
            ],
            valueInput: {
                value: ""
            }
        }
        this.onClickChangeStatus = this.onClickChangeStatus.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.showItemCompleted = this.showItemCompleted.bind(this);
        this.showItemNotCompleted = this.showItemNotCompleted.bind(this);
        this.clearAllItem = this.clearAllItem.bind(this);
    }
    onClickChangeStatus(item) {
        const todoItems = this.state.todoItems
        const index = todoItems.indexOf(item)

        this.setState({
            todoItems: [
                ...todoItems.slice(0, index),
                {
                    ...item,
                    isComplete: !item.isComplete
                },
                ...todoItems.slice(index + 1),
            ]
        });
    }
    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.setState({
                todoItems: [
                    ...this.state.todoItems,
                    { title: e.target.value, isComplete: false }
                ]
            })
        }

    }
    onChangeInput(e) {
        this.setState({
            valueInput: e.target.value
        })
    }
    onClickAdd(e) {
        this.setState({
            todoItems: [
                ...this.state.todoItems,
                { title: this.state.valueInput, isComplete: false }
            ]
        })
    }
    removeItem(index) {
        const todoItems = this.state.todoItems
        const arr1 = todoItems.slice(0, index);
        const arr2 = todoItems.slice(index + 1, todoItems.length);
        const new_arr = [...arr1, ...arr2];
        console.log(new_arr)
        this.setState({
            todoItems: [
                ...new_arr
            ]

        })
    }
    editItem(item, index) {
        const todoItems = this.state.todoItems
        const newItem = todoItems.map((todoItem) => {
            if (todoItem.id === index) {
                return (
                    {
                        ...item,
                        title: item.title
                    }
                )
            } else {
                return todoItem
            }
        })
        this.setState({
            todoItems: [
                ...newItem
            ],
            valueInput: {
                value: todoItems[index].title
            },
        })
    }
    showItemCompleted() {
        const newarr = this.state.todoItems.slice();
        this.setState({
            todoItems: [

            ]
        })
    }
    showItemNotCompleted() {
        const newarr = this.state.todoItems.slice();
        this.setState({
            todoItems: [
                ...newarr.filter((item) => {
                    return item.isComplete == false
                })

            ]
        })
    }
    clearAllItem() {
        this.setState({
            todoItems: []
        })
    }
    render() {
        return (
            <TodoContext.Provider value={{ todoItems: this.state.todoItems, onClickChangeStatus: this.onClickChangeStatus, onKeyUp: this.onKeyUp, onClickAdd: this.onClickAdd, onChangeInput: this.onChangeInput, removeItem: this.removeItem, valueInput: this.state.valueInput.value, editItem: this.editItem, showItemCompleted: this.showItemCompleted, showItemNotCompleted: this.showItemNotCompleted, clearAllItem: this.clearAllItem }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}