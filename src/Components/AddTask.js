import React, { useState } from "react";

function AddTask({ handleAddTask, passText, addFunction }) {
  const [text, setText] = useState("");

  return (
    <div className="bg-white text-black text-lg rounded-lg shadow-lg  my-4 space-x-4 items-center p-6 max-w-3xl mx-auto custom_shadow">
      <h1 className="font-serif font-bold text-3xl">Todo List</h1>
      <input
        type="text"
        value={text}
        className="rounded-sm mt-5 px-4 border-2 w-8/12 border-gray transition-all duration-500"
        placeholder="Add Task"
        maxLength={25}
        required
        onKeyUp={addFunction}
        onChange={(e) => {
          setText(e.target.value);
          passText(e.target.value);
        }}
      />
      <button
        className=" ml-4 text-center rounded-sm text-text hover:bg-textHover text-xl py-1 px-5 hover:border-black transition-all duration-200 ease-in-out"
        onClick={() => {
          setText("");
          handleAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
