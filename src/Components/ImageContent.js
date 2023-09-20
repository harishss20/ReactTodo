import React from "react";
import imgs from "../Images/imgs.png";

function ImageContent() {
  return (
    <div>
      <img
        src={imgs}
        className="w-100 mt-6 max-h-96 rounded-md drop-shadow-xl"
      ></img>
      <h2 className="mt-4 font-bold">Add Your Works</h2>
    </div>
  );
}

export default ImageContent;
