import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import ListCompleted from "./components/TodoList/ListCompleted";
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
        <div className="container__lists">
          <div className="container__lists--active">
            {todos.length !== 0 ? <h2>Active Tasks</h2> : ""}

            <TodoList todos={todos} setTodos={setTodos} />
          </div>

          <div className="container__lists--completed">
            {todos.filter((el) => el.isDone === true).length !== 0 ? (
              <h2>Completed Tasks</h2>
            ) : (
              ""
            )}
            <ListCompleted todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
