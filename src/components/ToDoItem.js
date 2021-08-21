import React, { Component } from 'react';

export class ToDoItem extends Component {
  render() {
    return (
      <li>
        <a href="#!">Learn React</a>
        <i className="fas fa-edit"></i>
        <i className="fas fa-trash-alt"></i>
      </li>
    );
  }
}

export default ToDoItem;
