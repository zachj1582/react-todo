import React, { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [done, setDone] = useState([]);
  let [checked, setChecked] = useState(false);

  const handleSubmit = (todo, e) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    console.log(todoList);
  };

  const clearAll = () => {
    setTodoList([]);
    setDone([]);
  };

  const clearTodo = (i) => {
    setTodoList(todoList.filter((e, ei) => ei !== i));
  };

  const clearDone = (i) => {
    setDone(done.filter((e, ei) => ei !== i));
  };

  const checkboxSubmitTodo = (i) => {
    setTodoList(todoList.filter((e, ei) => ei !== i));
    setDone([...done, todoList[i]]);
  };

  const checkboxSubmitDone = (i) => {
    setTodoList([...todoList, done[i]]);
    setDone(done.filter((e, ei) => ei !== i));
  };

  let displayTodo = todoList.map((todo, i) => (
    <li key={i}>
      {todo}
      <button className="task" onClick={() => checkboxSubmitTodo(i)}>
        Complete
      </button>
      <button className="task" onClick={() => clearTodo(i)}>
        X
      </button>
    </li>
  ));

  let displayDone = done.map((todo, i) => (
    <li key={i}>
      {todo}
      <button className="task" onClick={() => checkboxSubmitDone(i)}>
        Incomplete
      </button>
      <button className="task" onClick={() => clearDone(i)}>
        X
      </button>
    </li>
  ));

  return (
    <div className="todo">
      <header>
        <h1>To Do List</h1>
      </header>
      <TodoForm submit={handleSubmit} />
      <div className="container">
        <div className="list">
          <h3>Git 'err done!</h3>
          <ul>{displayTodo}</ul>
        </div>
        <div className="list">
          <h3>Got 'err done!</h3>
          <ul>{displayDone}</ul>
        </div>
      </div>
      <div className='clear-container' >
        <button className='task' onClick={() => clearAll()}>Clear All</button>
      </div>
    </div>
  );
};

export default TodoList;
