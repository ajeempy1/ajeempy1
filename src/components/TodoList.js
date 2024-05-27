// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const todoRef = database.ref('todos');

    todoRef.on('value', (snapshot) => {
      const todosData = snapshot.val();
      if (todosData) {
        const todosArray = Object.keys(todosData).map((key) => ({
          id: key,
          ...todosData[key],
        }));
        setTodos(todosArray);
      } else {
        setTodos([]);
      }
    });

    return () => todoRef.off('value');
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      database.ref('todos').push({
        text: newTodo,
      });
      setNewTodo('');
    }
  };

  const updateTodo = (id, newText) => {
    database.ref(`todos/${id}`).update({
      text: newText,
    });
  };

  const deleteTodo = (id) => {
    database.ref(`todos/${id}`).remove();
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.text}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
            />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
