import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { todoModel } from "./components/models/todoModel";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todoModel[]>([]);

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);
    }
    setTodo("");
  };

  return (
    <>
      <div className="container">
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleTodo={handleTodo}
          handleAddTodo={handleAddTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
