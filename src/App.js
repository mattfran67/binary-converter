import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleChange = e => {
    if (!isNaN(e.target.value)) {
      setValue(e.target.value)
    }
  };

  return (
    <div className="App">
      <input
        value={value}
        onChange={handleChange}
      />
      <input
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
