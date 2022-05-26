import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { todoModel } from "./components/models/todoModel";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todoModel[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: todo,
        isDone: false,
      },
    ]);
    setTodo("");
  };

  return (
    <>
      <div className="container">
        <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />

        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
