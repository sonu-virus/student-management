import React from 'react';

const Button = (props) => {
  return (
    <button
      className="border-2 border-gray-400 shadow-md shadow-gray-400 hover:bg-blue-600 px-4 rounded-md py-2"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
