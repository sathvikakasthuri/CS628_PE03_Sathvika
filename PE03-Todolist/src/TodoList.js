import React, { useState } from 'react';
import "./Todolist.css";

// Functional component for the Todo List app
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

 // Handler function to update the newTodo state
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

    // Handler function to add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim() }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

   // structure for the Todo List app
  return (
    <div className="container">
      <h1>Todo List</h1>
      
      <div className="input-area">
        <input 
          type="text" 
          value={newTodo} 
          onChange={handleInputChange} 
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {/* Displays the list of todos */}
      <ul className="task-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>{/* Display the todo text */}
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
