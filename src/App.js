import './App.css';
import Header from './MyComponents/header';
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import About from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    let sno;
    console.log("I am adding this todo", title, desc);
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const filteredTodos = todos.filter((todo) =>
  todo.title.toLowerCase().includes(search.toLowerCase())
);
<input
  className="form-control"
  type="search"
  placeholder="Search"
  onChange={(e) => setSearch(e.target.value)}
/>

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={filteredTodos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );

}

export default App;
