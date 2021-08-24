import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoContext from "../contexts/TodoContext";
import { faPen, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import "../components/TodoItem.css"
class InputItem extends Component {
    render() {
        return (
            <TodoContext.Consumer>
                {({ onKeyUp, onClickAdd, onChangeInput, valueInput }) => (
                    <div className="cart-header">
                        <input type="text" name="txtText" onKeyUp={onKeyUp} onChange={onChangeInput} className="cart-header_input" placeholder="Input your Task ..." value={valueInput} required></input>
                        <FontAwesomeIcon onClick={onClickAdd} className="cart-header_btn" icon={faPlus}></FontAwesomeIcon>
                    </div>
                )}
            </TodoContext.Consumer>
        )
    }
}
export default InputItem;
