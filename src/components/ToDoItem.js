import React, { Component } from 'react';

export class ToDoItem extends Component {
  render() {
    const {
      todo: { id, task, isComplete },
      editTask,
      deleteTask,
      completeTask,
    } = this.props;
    return (
      <li>
        <a
          onClick={() => {
            completeTask(id);
          }}
          style={
            isComplete ? { textDecoration: 'line-through', color: 'green' } : {}
          }
          href="#!"
        >
          {task}
        </a>
        <i
          onClick={() => {
            editTask(id);
          }}
          className="fas fa-edit"
        ></i>
        <i
          onClick={() => {
            deleteTask(id);
          }}
          className="fas fa-trash-alt"
        ></i>
      </li>
    );
  }
}

export default ToDoItem;
