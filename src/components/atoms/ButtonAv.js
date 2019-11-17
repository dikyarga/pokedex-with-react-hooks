import React from "react";
function ButtonAtomView({ onClicked, children, isPrimary = false }) {
  const className = isPrimary
    ? "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow";
  return (
    <button className={className} onClick={onClicked}>
      {children}
    </button>
  );
}

export default ButtonAtomView;
