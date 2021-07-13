import React from 'react';
import ToDoHeader from '../ToDoHeader/ToDoHeader';
import './ToDoCard.css';

const ToDoCard: React.FC = () => {
  return (
    <div className="ToDoCard" data-testid="todo-card">
      <ToDoHeader />
    </div>
  );
}

export default ToDoCard;
