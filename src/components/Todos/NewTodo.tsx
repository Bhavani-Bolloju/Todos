import React, { useRef, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/store";
import { nanoid } from "@reduxjs/toolkit";
import Calendar from "react-calendar";
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

function NewTodo() {
  const [date, setDate] = useState(new Date());
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const formHandler = function (e: React.FormEvent) {
    e.preventDefault();
    const inputValue = inputRef.current!.value;

    const dateForm = date.toISOString();

    dispatch(addTodo(todoItem(inputValue, dateForm)));

    inputRef.current!.value = "";
  };

  return (
    <>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
      <form onSubmit={formHandler}>
        <input type="text" ref={inputRef} />
        <button type="button">Add</button>
      </form>
    </>
  );
}

export default NewTodo;
