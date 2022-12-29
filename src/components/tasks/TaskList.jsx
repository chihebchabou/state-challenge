import React, { Component } from 'react';
import Task from './Task';

export default class TaskList extends Component {
  render() {
    const { tasks, deleteTask } = this.props;

    return (
      <ul className="todo-list">
        {tasks.map(task => (
          <Task task={task} key={task.id} deleteTask={deleteTask} />
        ))}
      </ul>
    );
  }
}
