import React, { useState } from 'react';
import AddBug from './Components/AddBug/AddBug';
import CurrentBug from './Components/CurrentBug/CurrentBug';
import { BugProvider } from './Components/BugContext';

import './App.css';

function App() {
  const [activePage, setActivePage] = useState('addBug');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <BugProvider>
      <div className="App">
        <h1>Bug Tracker</h1>

        <div className="view-pages">
          <button
            className={`btn add-bug-button ${activePage === 'addBug' ? 'active' : ''
              }`}
            onClick={() => handlePageChange('addBug')}
          >
            Add Bug
          </button>

          <button
            className={`btn current-bug-button ${activePage === 'currentBug' ? 'active' : ''
              }`}
            onClick={() => handlePageChange('currentBug')}
          >
            Current Bugs
          </button>
        </div>

        <div className="card-container">
          {activePage === 'addBug' && <AddBug />}
          {activePage === 'currentBug' && <CurrentBug />}
        </div>
      </div>
    </BugProvider>
  );
}

export default App;
