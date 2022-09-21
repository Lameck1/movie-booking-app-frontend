/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React from 'react';

const Input = ({ type, id, className, name, value, onChange }) => (
  <input
    type={type}
    id={id}
    className={className}
    name={name}
    value={value}
    onChange={onChange}
    required
  />

);

export default Input;
