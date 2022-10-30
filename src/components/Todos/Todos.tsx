import React, { useState } from "react";

import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

function Todos() {
  const [taskStatus, setTaskStatus] = useState("Todo");

  const taskStatusHandler = function (e: React.ChangeEvent<HTMLSelectElement>) {
    setTaskStatus(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={taskStatusHandler}>
          <option value="Todo">Todo Tasks</option>
          <option value="completed">Completed Tasks</option>
        </select>
      </div>
      <NewTodo />
      <TodoList onSelect={taskStatus} />
    </div>
  );
}

export default Todos;
