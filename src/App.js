import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos"))  ||[];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <>
   <center>
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
      </center></>
  );
};

export default App;
