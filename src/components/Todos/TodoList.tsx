import React from "react";
import { useAppSelector } from "../store/hooks";
import classes from "./TodoList.module.scss";
import TodoItems from "./TodoItems";
import { AnimatePresence } from "framer-motion";

const TodoList: React.FC<{ onSelect: String }> = function (props) {
  const todoList = useAppSelector((state) => state.items);

  let todos = todoList;

  if (props.onSelect === "Todo") {
    todos = todoList.filter((item) => item.status === false);
  } else {
    todos = todoList.filter((item) => item.status === true);
  }

  if (todos.length === 0) {
    return <h2>No Tasks....</h2>;
  }

  return (
    <ul className={classes.TodoList}>
      <AnimatePresence mode="sync">
        {todos.map((item, i) => (
          <TodoItems
            key={i}
            id={item.id}
            item={item.text}
            status={item.status}
            date={item.date}
            onSelect={props.onSelect}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
