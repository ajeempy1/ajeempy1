// src/App.js
import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';
import Form from './components/Form';
import Display from './components/Display';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestore.collection('data').get();
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    };

    fetchData();
  }, []);

  const addData = async (text) => {
    await firestore.collection('data').add({ text });
    setData([...data, { text }]);
  };

  const deleteData = async (id) => {
    await firestore.collection('data').doc(id).delete();
    setData(data.filter((item) => item.id !== id));
  };

  const updateData = async (id) => {
    const newText = prompt('Enter new text:');
    if (newText !== null) {
      await firestore.collection('data').doc(id).update({ text: newText });
      setData(data.map((item) => (item.id === id ? { ...item, text: newText } : item)));
    }
  };

  return (
    <div>
      <h1>React Firebase CRUD App</h1>
      <Form addData={addData} />
      <Display data={data} deleteData={deleteData} updateData={updateData} />
    </div>
  );
};

export default App;
