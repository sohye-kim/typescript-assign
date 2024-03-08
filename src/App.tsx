import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

type Todo = {
  id: string;
  title: string;
  date: Date;
  content: string;
  isDone: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), title: "주특기 플러스 개인 과제", date: new Date(2024, 2, 8), content: "TypeScript와 React를 사용해 ToDoList 만들기", isDone: false }
  ]);
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>(() => {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
  });
  const [content, setContent] = useState<string>("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value);
  const contentChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setContent(event.target.value);

  const addButtonHandler = () => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      date: new Date(date),
      content,
      isDone: false
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDate(() => {
      const currentDate = new Date();
      return currentDate.toISOString().split('T')[0];
    });
    setContent("");
  };

  const removeButtonHandler = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleDoneHandler = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = (isDone: boolean) => todos.filter((todo) => todo.isDone === isDone);

  return (
    <>
      <div id='grid_hz'>
        <div>
          <h3>🔥To-do</h3>
          <TodoList todos={filteredTodos(false)} removeButtonHandler={removeButtonHandler} toggleDoneHandler={toggleDoneHandler} isDone={false} />
          <h3>🎉Done</h3>
          <TodoList todos={filteredTodos(true)} removeButtonHandler={removeButtonHandler} toggleDoneHandler={toggleDoneHandler} isDone />
          <div className='addToDo'>
            <AddTodoForm
              title={title}
              date={new Date()}
              content={content}
              titleChangeHandler={titleChangeHandler}
              dateChangeHandler={dateChangeHandler}
              contentChangeHandler={contentChangeHandler}
              addButtonHandler={addButtonHandler}
            />
          </div>
        </div>
        <div className='side'></div>
      </div>
    </>
  );
}

export default App;