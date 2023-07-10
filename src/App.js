import React, { useState } from 'react';
import AddBug from './Components/AddBug/AddBug';
import CurrentBug from './Components/CurrentBug/CurrentBug';

import './App.css';

function App() {
  const [activePage, setActivePage] = useState('addBug');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <h1>Bug Tracker</h1>

      <div className="card-container">
        {activePage === 'addBug' ? <AddBug /> : <CurrentBug />}
      </div>

      {activePage === 'addBug' && (
        <div className="view-pages">
          <button
            className="btn add-bug-button active"
            onClick={() => handlePageChange('currentBug')}
          >
            Current Bugs
          </button>
        </div>
      )}

      {activePage === 'currentBug' && (
        <div className="view-pages">
          <button
            className="btn current-bug-button"
            onClick={() => handlePageChange('addBug')}
          >
            Add Bug
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
