import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] =  useState([])
  return (
    <>
        <TodoList />
      <input type="text"  />
      <button>Add task</button>
    <button>Clear completed tasks</button>
    <div>No tasks left</div>
    </>
  )
}

export default App;
