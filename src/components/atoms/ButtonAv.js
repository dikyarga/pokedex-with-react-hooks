import React from "react";

function ButtonAtomView({
  onClicked,
  children,
  isPrimary = false,
  className = ""
}) {
  const buttonClass = isPrimary
    ? "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2"
    : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2";
  return (
    <button className={`${className} ${buttonClass}`} onClick={onClicked}>
      {children}
    </button>
  );
}

export default ButtonAtomView;
