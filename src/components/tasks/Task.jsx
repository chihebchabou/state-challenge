import React, { Component } from 'react';

export default class Task extends Component {
  state = {
    isDone: false,
  };

  onDeleteClicked = () => {
    const { id } = this.props.task;
    this.props.deleteTask(id);
  };

  onTaskCompleted = () => this.setState({ isDone: !this.state.isDone });

  render() {
    const { taskName } = this.props.task;
    return (
      <li>
        <span
          className={this.state.isDone && 'completed'}
          onClick={this.onTaskCompleted}
        >
          {taskName}
        </span>
        <i className="fa-solid fa-trash-can" onClick={this.onDeleteClicked}></i>
      </li>
    );
  }
}
