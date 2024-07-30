import React, { useState } from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoBox = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now() + Math.random().toString(36),
      text: newTask.trim()
    };

    setTasks([task, ...tasks]);
    setNewTask('');
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-box">
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleFormSubmit}>
          <div className="me-3">
            <input
              type="text"
              value={newTask}
              onChange={handleInputChange}
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
          <Item key={task.id} task={task.text} onRemove={() => handleRemove(task.id)} />
        ))}
      </div>
    </div>
  );
};

export default TodoBox;
