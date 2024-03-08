import React from 'react';
import TodoCard from './TodoCard';

interface TodoItem {
  id: string;
  title: string;
  date: Date;
  content: string;
}

interface TodoListProps {
  todos: TodoItem[];
  removeButtonHandler: (id: string) => void;
  toggleDoneHandler: (id: string) => void;
  isDone: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeButtonHandler, toggleDoneHandler, isDone }) => (
  <div className={isDone ? 'doneCards' : 'workingCards'}>
    {todos.map((item) => (
      <TodoCard key={item.id} item={item} removeButtonHandler={removeButtonHandler} toggleDoneHandler={toggleDoneHandler} />
    ))}
  </div>
);

export default TodoList;