import React, { useState } from "react";
import Calendar from "react-calendar";
import "./TodoCalendar.scss";

const TodoCalendar: React.FC<{ onDate: (value: String) => void }> =
  function () {
    const [date, setDate] = useState(new Date());

    return (
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
    );
  };

export default TodoCalendar;
