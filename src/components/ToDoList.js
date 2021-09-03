import React, { Component, Fragment } from 'react';
import ToDoItem from './ToDoItem';

export class ToDoList extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: 'Learn React',
        isComplete: false,
      },
    ],
    newTask: '',
  };

  handleChange = (e) => this.setState({ newTask: e.target.value });

  addTask = () => {
    if (this.state.newTask) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: Math.floor(Math.random() * 1000),
            task: this.state.newTask,
            isComplete: false,
          },
        ],
      });
    } else {
      alert('Please enter a task');
    }
  };

  editTask = (id) => {
    const task = prompt('edit this task');
    this.setState({
      todos: this.state.todos.map((todo) =>
        task && todo.id === id ? { ...todo, task: task } : todo
      ),
    });
  };

  deleteTask = (id) =>
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });

  completeTask = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <Fragment>
        <div className="my-todos">
          <h1 className="title">My toDo list</h1>
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleChange}
            placeholder="Add ToDo..."
          />
          <button onClick={this.addTask}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <ToDoItem
              todo={todo}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              completeTask={this.completeTask}
              key={todo.id}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default ToDoList;
