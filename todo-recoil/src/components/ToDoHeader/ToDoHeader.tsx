import React from 'react';
import './ToDoHeader.css';
import HeaderLabel from './../../containers/HeaderLabel/HeaderLabel';

const ToDoHeader: React.FC = () => {
  const currentDate = new Date();
  const currentWeekDay = currentDate.toLocaleString('en-us', {weekday:'long'});
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.toLocaleString('en-us', {month:'long'});
  const dateLabel = `${currentDay} ${currentMonth}`;

  return (
    <div className="ToDoHeader" data-testid="todo-header">
      <HeaderLabel label={currentWeekDay} subtitle={dateLabel}/>
    </div>
  );
}

export default ToDoHeader;
