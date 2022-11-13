import React, { useRef } from "react";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/store";
import { nanoid } from "@reduxjs/toolkit";
import classes from "./NewTodo.module.scss";

import "./TodoCalendar.scss";

const todoItem = function (
  text: string,
  date: string,
  status: Boolean = false
) {
  return {
    text: text,
    status: status,
    id: nanoid(4),
    date: date,
  };
};

const NewTodo: React.FC<{ pickDate: string }> = function (props) {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const formHandler = function (e: React.FormEvent) {
    e.preventDefault();
    const inputValue = inputRef.current!.value;

    dispatch(addTodo(todoItem(inputValue, props.pickDate)));

    inputRef.current!.value = "";
  };

  return (
    <>
      <form onSubmit={formHandler} className={classes.Newtodo}>
        <input type="text" ref={inputRef} placeholder="add your task" />
        <button type="button">+</button>
      </form>
    </>
  );
};

export default NewTodo;
