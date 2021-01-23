import React from 'react';

export function ConverterInput(props) {
  const value = props.type === props.name
    ? props.value 
    : converterNumBinary(value, props.name);

  return (
    <input
      value={props.value}
      onChange={props.onChange}
    />
  )
} 