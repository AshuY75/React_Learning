import { useState } from "react";
import "./App.css";
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo";

function App() {
  return (
    <div className="min-h-screen bg-black   justify-center">
      <h1 className="text-5xl font-extrabold text-white">
        React Todo Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
