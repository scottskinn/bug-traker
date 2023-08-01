import React, { useContext } from 'react';
import { BugContext } from '../BugContext';

import './CurrentBug.css';

function CurrentBug() {
  const { bugs, removeBug } = useContext(BugContext);

  const handleBugClose = (index) => {
    const confirmation = window.confirm('Are you sure you want to close this bug?');
    if (confirmation) {
      removeBug(index);
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
                Assigned:
              </h3>
              <span>{bug.dev}</span>
              <h3>
                Priority:
              </h3>
              <span>{bug.priority}</span>
              <h3>
                Description:
              </h3>
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
