import React, {Component} from "react"; 
import "../components/TodoItem.css"
import TodoContext from "../contexts/TodoContext";

class Footer extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <TodoContext.Consumer>
                {({showItemCompleted,showItemNotCompleted,clearAllItem}) => {
                    return(
                        <div className="card-footer">
                            <div onClick={showItemCompleted} className="card-footer-show">Completed</div>
                            <div onClick={showItemNotCompleted} className="card-footer-show">Not Complete</div>
                            <div onClick={clearAllItem} className="card-footer-clear">Clear All</div>
                        </div>
                    )
                }}
                
            </TodoContext.Consumer>
        )
    }
}
export default Footer;