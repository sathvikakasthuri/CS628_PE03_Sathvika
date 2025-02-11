import React from 'react';

const ToDoItem = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ToDoItem;
