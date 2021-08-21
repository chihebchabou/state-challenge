import React, { Component, Fragment } from 'react';
import ToDoItem from './ToDoItem';

export class ToDoList extends Component {
  render() {
    return (
      <Fragment>
        <div className="my-todos">
          <h1 className="title">My toDo list</h1>
          <input type="text" placeholder="Add ToDo..." />
          <button>Add</button>
        </div>
        <ul className="todo-list">
          <ToDoItem />
        </ul>
      </Fragment>
    );
  }
}

export default ToDoList;
