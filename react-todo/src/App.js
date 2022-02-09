import './App.css';
import { useState } from 'react';

import Nav from './components/Nav';
import MainWrapper from './components/MainWrapper';
import ToDoWrapper from './components/ToDoWrapper';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {

  const listWithToDos = [];
  const [toDoList, setToDoList] = useState(listWithToDos);

  const addToDo = (title, input) => {
    let copy = toDoList;
    copy = [...copy, { id: toDoList.length + 1, toDoTitle: title, content: input }];
    setToDoList(copy);
  };

  function handleDeleteClick(id) {
    let removeItem = toDoList.filter((todo) => {
      return todo.id !== id;
    });
    setToDoList(removeItem);
  }

  return (
    <div className="App">
      <Nav />
      <MainWrapper>
        <ToDoForm addToDo={addToDo} />
        <ToDoWrapper>
          <ToDoList toDoList={toDoList} onDeleteClick={handleDeleteClick} />
        </ToDoWrapper>
      </MainWrapper>
    </div>
  );
}

export default App;
