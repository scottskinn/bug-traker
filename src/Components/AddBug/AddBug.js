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
    window.location.reload();
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
            <option value="Team Member 1">Team Member 1</option>
            <option value="Team Member 2">Team Member 2</option>
            <option value="Team Member 3">Team Member 3</option>
            <option value="Team Member 4">Team Member 4</option>
            <option value="Team Member 5">Team Member 5</option>
          </select>
        </label>
        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Danger Zone!">Danger Zone!</option>
          </select>
        </label>

        <button className='btn' type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBug;
