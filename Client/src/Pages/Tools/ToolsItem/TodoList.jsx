import React, { useState } from "react";
import './ToolsStyle/TodoList.css';

const TodoList = () => {
  const [getText, setGetText] = useState('');
  const [todoList, setTodoList] = useState([]);

  // Function to add a new todo
  const addTodo = () => {
    if (getText.trim() === '') return; // Prevent adding empty items
    setTodoList((prev) => [...prev, getText]);
    setGetText(''); // Clear the input field after adding
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="todo-list">
        <div className="todo-input">
          <input
            value={getText}
            onChange={(e) => setGetText(e.target.value)}
            type="text"
            placeholder="Enter a todo"
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="todo-output">
          {todoList.map((item, i) => (
            <div key={i} className="out-comes">
              <p>{item}</p>
              <button onClick={() => deleteTodo(i)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
