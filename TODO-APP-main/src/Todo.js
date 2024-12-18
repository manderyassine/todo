import React, { useState } from 'react';
import EditTask from './EditTask';

const Todo = ({ task, removeTask, saveTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <EditTask task={task} saveTask={(newTask) => { saveTask(newTask); setIsEditing(false); }} />
      ) : (
        <>
          <span>{task}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={removeTask}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Todo;
