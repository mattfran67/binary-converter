import React, { useState } from 'react';
import { ConverterInput } from './ConverterInput';
import validation from './validation';

function App() {
  const [value, setValue] = useState('');
  const [type, setType] = useState('decimal');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    const [isValid, validMessage] = validation(value, name);

    setShowMessage(!isValid);
    setMessage(validMessage);

    if (isValid) {
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

      {showMessage &&
        <div>{message}</div>
      }
    </div>
  );
}

export default App;
