import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTask from './AddTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTask = (task) => {
    this.setState({
      todos: [...this.state.todos, task]
    });
  }

  removeTask = (index) => {
    const newTodos = this.state.todos.filter((todo, i) => i !== index);
    this.setState({
      todos: newTodos
    });
  }

  saveTask = (index, newTask) => {
    const newTodos = this.state.todos.map((todo, i) => (
      i === index ? newTask : todo
    ));
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>App</h1>
          <AddTask addTask={this.addTask} />
          <TodoList 
            todos={this.state.todos} 
            removeTask={this.removeTask} 
            saveTask={this.saveTask} 
          />
        </header>
      </div>
    );
  }
}

export default App;
