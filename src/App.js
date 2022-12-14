import React, { useState, useEffect } from 'react';
import AddBug from './Components/AddBug/AddBug';
import CurrentBug from './Components/CurrentBug/CurrentBug';

import './App.css'

function App() {
  const [ addBug, setAddBug ] = useState(true);

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <div className='card-container'>
        { addBug ? <AddBug /> : <CurrentBug />}
      {/* <CurrentBug /> */}
      </div>
      {/* <AddBug /> */}
      <div className='view-pages'>
        <button className='current-bug-button'>Current Bug</button>
        <button className='current-bug-button add-bug-button'>Add Bug</button>
      </div>
    </div>
  );
}

export default App;
