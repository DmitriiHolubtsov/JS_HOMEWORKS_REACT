import React, { Component } from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleInputChange(e) {
    this.setState({ newTask: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { newTask, tasks } = this.state;
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      text: newTask.trim()
    };

    this.setState({
      tasks: [task, ...tasks],
      newTask: ''
    });
  }

  handleRemove(id) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  }

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleFormSubmit}>
            <div className="me-3">
              <input
                type="text"
                value={newTask}
                onChange={this.handleInputChange}
                required
                className="form-control"
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>
        <div>
          {tasks.map((task) => (
            <Item key={task.id} task={task.text} onRemove={() => this.handleRemove(task.id)} />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoBox;
