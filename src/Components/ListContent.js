import React from "react";
import { useContext } from "react";
import { Context } from "../App";

function ListContent() {
  const { task } = useContext(Context);

  return (
    <div className="">
      <ul className="mt-8">
        {task.map((t) => (
          <li
            className="py-1 border-2 mb-2  rounded-sm w-96 flex items-center justify-between hover:bg-textHover border-gray font-medium"
            key={t.id}
          >
            <span className="pl-2">{t.text}</span>
            <Button task={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListContent;

function Button({ task }) {
  const { handleDeleteTask } = useContext(Context);
  return (
    <div>
      <button
        className=" ml-4 text-center  text-text hover:bg-textHover hover:text-red hover:font-bold text-xl py-1 px-4 transition-all  duration-200 ease-in-out mr-1"
        onClick={() => {
          handleDeleteTask(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
