import React, { createContext, useState } from 'react';

const BugContext = createContext();

const BugProvider = ({ children }) => {
  const [bugs, setBugs] = useState(JSON.parse(localStorage.getItem('bugs')) || []);

  const addBug = (bug) => {
    const updatedBugs = [...bugs, bug];
    localStorage.setItem('bugs', JSON.stringify(updatedBugs));
    setBugs(updatedBugs);
  };

  const removeBug = (index) => {
    const filteredBugs = bugs.filter((_, i) => i !== index);
    localStorage.setItem('bugs', JSON.stringify(filteredBugs));
    setBugs(filteredBugs);
  };

  return (
    <BugContext.Provider value={{ bugs, addBug, removeBug }}>
      {children}
    </BugContext.Provider>
  );
};

export { BugContext, BugProvider };
