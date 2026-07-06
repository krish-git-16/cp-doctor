import React from "react";

function Button({
  text,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;