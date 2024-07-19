import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class EventLogger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      nextId: 1
    };
  }

  handleAdd = () => {
    this.setState((prevState) => {
      const newValue = prevState.log.length === 0 ? 1 : prevState.log[0].value + 1;
      const newLog = [{ id: prevState.nextId, value: newValue }, ...prevState.log];
      return { log: newLog, nextId: prevState.nextId + 1 };
    });
  };

  handleSubtract = () => {
    this.setState((prevState) => {
      const newValue = prevState.log.length === 0 ? -1 : prevState.log[0].value - 1;
      const newLog = [{ id: prevState.nextId, value: newValue }, ...prevState.log];
      return { log: newLog, nextId: prevState.nextId + 1 };
    });
  };

  handleRemove = (id) => {
    this.setState((prevState) => {
      return { log: prevState.log.filter((entry) => entry.id !== id) };
    });
  };

  render() {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" className="btn btn-outline-success" onClick={this.handleAdd}>
            +
          </button>
          <button type="button" className="btn btn-outline-danger" onClick={this.handleSubtract}>
            -
          </button>
        </div>
        <div className="list-group">
          {this.state.log.map((entry) => (
            <button
              key={entry.id}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => this.handleRemove(entry.id)}>
              {entry.value}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default EventLogger;
