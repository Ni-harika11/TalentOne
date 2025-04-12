import React, { useState } from 'react';

function ToggoleThem() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-black text-white min-h-screen p-5' : 'bg-white text-black min-h-screen p-5'}>
      <button
        onClick={toggleTheme}
        
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      <h1 >This is {darkMode ? 'Dark' : 'Light'} Mode</h1>
    </div>
  );
}

export default ToggoleThem;
