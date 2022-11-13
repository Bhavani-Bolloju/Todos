import React, { useState } from "react";

import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import Calendar from "react-calendar";

import classes from "./Todos.module.scss";

function Todos() {
  const [taskStatus, setTaskStatus] = useState("Todo");
  const [date, setDate] = useState(new Date());

  const taskStatusHandler = function (e: React.ChangeEvent<HTMLSelectElement>) {
    setTaskStatus(e.target.value);
  };

  return (
    <div className={classes.Todos}>
      <Calendar onChange={setDate} value={date} />
      <div className={classes["Todos_select"]}>
        <select onChange={taskStatusHandler}>
          <option value="Todo">Todo Tasks</option>
          <option value="completed">Completed Tasks</option>
        </select>
      </div>
      <NewTodo pickDate={date.toISOString()} />
      <TodoList onSelect={taskStatus} />
    </div>
  );
}

export default Todos;
