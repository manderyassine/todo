import React, { useState } from 'react';

const EditTask = ({ task, saveTask }) => {
  const [newTask, setNewTask] = useState(task);

  const handleSave = () => {
    saveTask(newTask);
  };

  return (
    <div className="edit-task">
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Edit task"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditTask;
