import React from "react";
import classes from "./TodoItems.module.scss";
import { useAppDispatch } from "../store/hooks";
import { changeStatus } from "../store/store";

const TodoItems: React.FC<{
  item: string;
  id: string;
  date: string;
  status: Boolean;
}> = function (props) {
  const date = new Date(props.date);
  const weekday = date.toLocaleDateString("en-us", {
    weekday: "short",
  });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-us", {
    month: "short",
  });

  const dispatch = useAppDispatch();

  const checkTodoHander = function () {
    dispatch(changeStatus(props.id));
  };

  const taskClass = props.status
    ? `${classes["todo-checkbox"]} ${classes.active}`
    : classes["todo-checkbox"];

  return (
    <li onClick={checkTodoHander} className={classes["Todo-item"]}>
      <span className={classes["todo-text"]}>{props.item}</span>
      <span className={taskClass} />
    </li>
  );
};

export default TodoItems;
