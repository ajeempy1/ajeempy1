// src/components/Display.js
import React from 'react';

const Display = ({ data, deleteData, updateData }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => deleteData(item.id)}>Delete</button>
          <button onClick={() => updateData(item.id)}>Update</button>
        </li>
      ))}
    </ul>
  );
};

export default Display;
