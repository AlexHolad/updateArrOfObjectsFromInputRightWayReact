import React, { useState } from "react";

export default function Child({
  name,
  selectFastenings,
  setSelectFastenings,
  index
}) {
  console.log(selectFastenings);
  return (
    // <div>
    //   <input
    //     type="text"
    //     value={name}
    //     onChange={(e) => {
    //       name = e.target.value;
    //       setSelectFastenings([...selectFastenings]);
    //     }}
    //   />
    // </div>
  );
}
