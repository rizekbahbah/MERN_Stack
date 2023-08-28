import React, { useState } from 'react';
import TodoList from './components/ToDoList';
import Todo from './components/ToDo';
import './App.css';

function App() {
  const [lists , setLists] = useState([])
  const [crtList , setCrtList] = useState("")

  const handleList = (newList) => {
    setCrtList(newList)
  }


  return (
    <div className="App">
      <header className="App-header">
        <TodoList lists = {lists} setCrtList ={handleList}/>
        <Todo lists = {lists} crtList = {crtList} />
      </header>
    </div>
  );
}

export default App;