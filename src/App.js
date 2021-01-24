import React, { useState } from 'react';
import { ConverterInput } from './ConverterInput';

function App() {
  const [value, setValue] = useState('');
  const [type, setType] = useState('decimal');

  const handleChange = ({ target }) => {
    const { value, name } = target;
    if (!isNaN(value)) {
      setValue(value);
      setType(name);
    }
  };

  return (
    <div className="App">
      <ConverterInput
        value={value}
        onChange={handleChange}
        type={type}
        name="decimal"
      />
      <ConverterInput
        value={value}
        onChange={handleChange}
        type={type}
        name="binary"
      />
    </div>
  );
}

export default App;
