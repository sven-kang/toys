import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoCard from './ToDoCard';

test('renders ToDoCard component', () => {
  render(<ToDoCard />);
  const toDoCard = screen.getByTestId('todo-card');
  expect(toDoCard).toBeInTheDocument();
});
