import React from 'react';
import './CurrentBug.css';

function CurrentBug() {
  const bugs = JSON.parse(localStorage.getItem('bugs')) || [];

  const handleBugClose = (index) => {
    const confirmation = window.confirm('Are you sure you want to close this bug?');
    if (confirmation) {
      const updatedBugs = bugs.filter((_, i) => i !== index); // Remove the bug at the given index
      localStorage.setItem('bugs', JSON.stringify(updatedBugs));
      window.location.reload(); // Refresh the page to reflect the changes
    }
  };

  return (
    <div className="current-bug">
      <div className="current-bug-form">
        {bugs.map((bug, index) => (
          <React.Fragment key={index}>
            <>
              <button className="btn close-bug" onClick={() => handleBugClose(index)}>
                Close Bug
              </button>
              <h3>
                Assigned: <span>{bug.dev}</span>
              </h3>
              <h3>
                Priority: <span>{bug.priority}</span>
              </h3>
              <h3>Description:</h3>
              <p className="description-text">{bug.decs}</p>
              <hr />
            </>
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
