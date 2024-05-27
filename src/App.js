// src/App.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { firestore } from './firebase';
import Form from './components/Form';
import Display from './components/Display';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(firestore, 'data'));
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    };

    fetchData();

    // Listen for real-time updates
    const unsubscribe = onSnapshot(collection(firestore, 'data'), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []); // Fetch data initially

  const addData = async (text) => {
    try {
      const docRef = await addDoc(collection(firestore, 'data'), { text });
      // No need to update state here; it's handled by the real-time listener
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(firestore, 'data', id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const updateData = async (id) => {
    const newText = prompt('Enter new text:');
    if (newText !== null) {
      try {
        await updateDoc(doc(firestore, 'data', id), { text: newText });
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  return (
    <div>
      <h1>React Firebase CRUD App</h1>
      <p><b>Abhi ram</b></p>
      <Form addData={addData} />
     
      <Display data={data} deleteData={deleteData} updateData={updateData} />
    </div>
  );
};

export default App;
