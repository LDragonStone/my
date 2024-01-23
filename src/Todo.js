import React, { useState } from 'react';
import './Todo.css';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todoInput.trim() !== '') {
      setTodoList([...todoList, { text: todoInput, completed: false }]);
      setTodoInput('');
    }
  };

  const handleCheckboxChange = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };

  const handleDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className="Block">
      <h2>Todo List</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='write your todoList'
          value={todoInput}
          onChange={handleInputChange}
        />
      </form>
      
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span 
              className={todo.completed ? 'completed' : ''}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(index)}> x </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
