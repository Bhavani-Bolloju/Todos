import React from "react";
import Todos from "./components/Todos/Todos";
// import TodoCalendar from "./components/Todos/TodoCalendar";

import "./App.css";

function App() {
  // const dateHandler = function (value: String) {
  //   console.log(value);
  // };

  return (
    <div className="App">
      {/* <TodoCalendar onDate={dateHandler} /> */}
      <Todos />
    </div>
  );
}

export default App;
