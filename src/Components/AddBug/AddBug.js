import React, { useState } from 'react';
import './AddBug.css';

function AddBug() {
  const [decs, setDecs] = useState('');
  const [dev, setDev] = useState('');
  const [priority, setPriority] = useState('');

  const addToLocalStorage = () => {
    const existingBugs = JSON.parse(localStorage.getItem('bugs')) || [];
    const newBug = {
      decs: decs,
      dev: dev,
      priority: priority
    };
    const updatedBugs = [...existingBugs, newBug];
    localStorage.setItem('bugs', JSON.stringify(updatedBugs));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToLocalStorage();
  };

  return (
    <div className="Add-bug">
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={decs}
            onChange={(e) => setDecs(e.target.value)}
          />
        </label>
        <label>
          Assign To:
          <select
            value={dev}
            onChange={(e) => setDev(e.target.value)}
          >
            <option value="0">Select Team Member:</option>
            <option value="1">Team Member 1</option>
            <option value="2">Team Member 2</option>
            <option value="3">Team Member 3</option>
            <option value="4">Team Member 4</option>
            <option value="5">Team Member 5</option>
          </select>
        </label>
        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="0">Select Priority</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            <option value="4">Danger Zone!</option>
          </select>
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBug;
