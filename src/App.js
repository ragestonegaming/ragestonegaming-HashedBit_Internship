import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  // Function to handle input field change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Function to add a new task
  const addTask = () => {
    if (task.trim() !== '') {
      const newTodoList = [...todoList, task];
      setTodoList(newTodoList.sort()); // Add task and sort list
      setTask(''); // Clear input field
    }
  };

  // Function to handle Enter key press to add task
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1); // Remove task by index
    setTodoList(newTodoList.sort()); // Sort remaining tasks
  };

  return (
    <div className="notebook-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} 
        placeholder="Enter a task"
      />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo} 
            <button onClick={() => deleteTask(index)}>×</button> {/* Cross button */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
