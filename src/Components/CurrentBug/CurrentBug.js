import React from 'react';
import './CurrentBug.css';

function CurrentBug() {
  const bugs = JSON.parse(localStorage.getItem('bugs')) || [];

  return (
    <div className="current-bug">
      <div className="current-bug-form">
        <p className="close-bug">Close Bug</p>
        {bugs.map((bug, index) => (
          <React.Fragment key={index}>
            <p>
              Assigned <span>{bug.dev}</span>
            </p>
            <p>
              Priority <span>{bug.priority}</span>
            </p>
            <p>Description</p>
            <p className="description-text">{bug.decs}</p>
            <hr />
          </React.Fragment>
        ))}
        <div className="scrollbar" id="style-8">
          <div className="force-overflow"></div>
        </div>
      </div>
    </div>
  );
}

export default CurrentBug;
