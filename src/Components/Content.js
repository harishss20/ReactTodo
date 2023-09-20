import React from "react";
import ImageContent from "./ImageContent";
import ListContent from "./ListContent";
import { useContext } from "react";
import { Context } from "../App";
function Content() {
  const { task } = useContext(Context);

  return (
    <div className="bg-white text-black text-lg rounded-lg shadow-lg  my-4 space-x-4 flex justify-center items-center p-6 max-w-3xl mx-auto custom_shadow flex-col relative">
      <h1 className="absolute top-0 m-4 font-bold left-0">
        You have {task.length}works
      </h1>
      {task.length === 0 ? <ImageContent /> : <ListContent />}
    </div>
  );
}

export default Content;
