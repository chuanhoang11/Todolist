import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import TodoContext from "../contexts/TodoContext";
import InputItem from "../components/InputItem";
import Footer2 from "../components/Footer";
import classNames from 'classnames';
import "../components/TodoItem.css"
import checkImg from "../img/check.svg"
import unCheckImg from "../img/dry-clean.svg"
class TodoItem extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="wrapper-card">
                        <div className="wrapper-card-inside">
                            <h1 className="task-heading">Task Manager</h1>
                            <InputItem />
                            <ul className="todo-list">
                                <TodoContext.Consumer>
                                    {({ todoItems, onClickChangeStatus, removeItem, editItem }) => (
                                        todoItems.map((item, index) => {
                                            let imageUrl = checkImg;
                                            if (item.isComplete == false) {
                                                imageUrl = unCheckImg
                                            }
                                            return (
                                                <li className="todo-item">
                                                    <img onClick={() => { onClickChangeStatus(item) }} className="todo-item-img" src={imageUrl} width={28}></img>
                                                    <p className={classNames("todo-item-text", { "item-complete": item.isComplete == true })}>{item.title}</p>
                                                    <div className="todo-item-icon">
                                                        <FontAwesomeIcon onClick={() => { editItem(item, index) }} className="todo-item-icon_edit" icon={faPen} />
                                                        <FontAwesomeIcon onClick={() => { removeItem(index) }} className="todo-item-icon_delete" icon={faTrashAlt} />
                                                    </div>
                                                </li>
                                            )

                                        })
                                    )
                                    }
                                </TodoContext.Consumer>
                            </ul>
                            <Footer2 />

                        </div>

                    </div>
                    <h3 className="footer-text">@2021 Make by HoangGiangChuan </h3>
                </div>
            </div>
        )
    }
}
export default TodoItem;
