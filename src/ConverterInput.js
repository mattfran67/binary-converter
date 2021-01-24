import React from 'react';
import converterDecBinary from './helpers/converterDecBinary';

export function ConverterInput({ value, type, name, onChange }) {
  const inputValue = !value || type === name
    ? value
    : converterDecBinary(value, name);

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        value={inputValue}
        onChange={onChange}
        name={name}
        autoComplete="off"
      />
    </>
  )
} 