import React, {Component} from 'react';
import './App.css';

import TodoProvider from "./contexts/TodoProvider"
import TodoItem from "./components/TodoItem"


class App extends Component {
  constructor(){
    super();
   
  }
  render(){
    return (
    <div>
      <TodoProvider>
        <TodoItem />
      </TodoProvider>
   </div>
  );
  }
  
}

export default App;
