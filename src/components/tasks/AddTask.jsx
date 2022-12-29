import React, { Component } from 'react';

export default class AddTask extends Component {
  state = {
    task: '',
  };

  onTaskChanged = event => this.setState({ task: event.target.value });

  onAddClicked = () => {
    if (this.state.task === '') {
      alert('Please enter a task name');
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        taskName: this.state.task,
      };

      this.props.addTask(newTask);
      this.setState({ task: '' });
    }
  };

  render() {
    return (
      <div className="my-todos">
        <h1 className="title">My toDo list</h1>
        <div className="input-group">
          <input
            type="text"
            value={this.state.task}
            onChange={this.onTaskChanged}
            placeholder="Add ToDo..."
          />
          <button className="addBtn" onClick={this.onAddClicked}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
