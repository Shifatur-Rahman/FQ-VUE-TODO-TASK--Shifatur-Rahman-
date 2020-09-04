import React from "react";
import TodoInput from "./components/TodoInput";
import TodoOutput from "./components/TodoOutput";
import NewStyle from "./asset/NewStyle.css";

function App() {
  return (
    <div className='App container'>
      <h4 className='header'>Todo Input</h4>
      <TodoInput />
      <TodoOutput />
    </div>
  );
}

export default App;
