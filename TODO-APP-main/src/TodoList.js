import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, removeTask, saveTask }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo 
          key={index} 
          task={todo} 
          removeTask={() => removeTask(index)} 
          saveTask={(newTask) => saveTask(index, newTask)} 
        />
      ))}
    </div>
  );
};

export default TodoList;
