import React from 'react';
import converterDecBinary from './converterDecBinary';

export function ConverterInput(props) {
  const value = !props.value || props.type === props.name
    ? props.value
    : converterDecBinary(props.value, props.name);

  return (
    <input
      value={value}
      onChange={props.onChange}
      name={props.name}
    />
  )
} 