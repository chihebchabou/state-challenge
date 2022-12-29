import { Component, Fragment } from 'react';
import './App.css';
import AddTask from './components/tasks/AddTask';
import TaskList from './components/tasks/TaskList';

class App extends Component {
  state = {
    tasks: [],
  };

  addTask = task => {
    console.log(task);
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  deleteTask = id => {
    console.log(id);
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
  };

  render() {
    const { tasks } = this.state;

    return (
      <Fragment>
        <AddTask addTask={this.addTask} />
        <TaskList tasks={tasks} deleteTask={this.deleteTask} />
      </Fragment>
    );
  }
}

export default App;
