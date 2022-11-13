import React, { useState } from "react";
import classes from "./TodoItems.module.scss";
import { useAppDispatch } from "../store/hooks";
import { changeStatus } from "../store/store";
import { motion } from "framer-motion";

const TodoItems: React.FC<{
  item: string;
  id: string;
  date: string;
  status: Boolean;
  onSelect: String;
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
    <>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        exit={{ opacity: 0 }}
        onClick={checkTodoHander}
        className={classes["Todo-item"]}
      >
        <div className={classes["todo-text"]}>
          <span className={classes["todo-text"]}>{props.item}</span>
          <span className={taskClass} />
        </div>
        <div className={classes["todo-date"]}>
          <span>{month}</span>
          <span>{`${day}`}</span>
        </div>
      </motion.li>
    </>
  );
};

export default TodoItems;
