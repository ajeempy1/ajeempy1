// src/components/Form.js
import React, { useState } from 'react';

const Form = ({ addData }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter data"
      />
      <button type="submit">Add Data</button>
    </form>
  );
};

export default Form;
