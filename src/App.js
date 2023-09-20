import "./App.css";
import AddTask from "./Components/AddTask";
import React, { useState, useReducer, createContext, useEffect } from "react";
import Content from "./Components/Content";

// context
export const Context = createContext();

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, initialTask);
  const [nextid, setNextid] = useState(0);
  const [text, passText] = useState("");

  function addFunction(e) {
    if (e.key === "Enter" && text.trim() !== "") {
      e.preventDefault();
      handleAddTask(text);
      passText("");
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", addFunction);
  }, []);

  function handleAddTask(text) {
    if (text === "") {
      alert("Enter your list!!!");
    } else {
      dispatch({
        type: "added",
        id: nextid,
        text: text,
      });
      setNextid(nextid + 1);
    }
  }

  function handleDeleteTask(id) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }

  return (
    <div className="App">
      <Context.Provider
        value={{ task: tasks, handleDeleteTask: handleDeleteTask }}
      >
        <AddTask
          handleAddTask={handleAddTask}
          passText={passText}
          addFunction={addFunction}
        />
        <Content />
      </Context.Provider>
    </div>
  );
}

const initialTask = [];
//reducer function
function reducer(task, action) {
  switch (action.type) {
    case "added":
      return [...task, { id: action.id, text: action.text }];
    case "deleted":
      return task.filter((t) => t.id !== action.id);
  }
}
