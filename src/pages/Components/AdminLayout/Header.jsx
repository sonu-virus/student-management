import React from 'react';

const Header = () => {
  return (
    <header className="h-16  flex bg-purple-300 justify-between px-5 sticky top-0 z-10 items-center  shadow-gray-400 shadow-md">
      <h3 className="hover:scale-110 hover:text-blue-600">RFID</h3>
      <div className="hover:scale-110 hover:text-white hover:bg-blue-400 h-10 w-10 rounded-full bg-red-500  flex justify-center items-center font-semibold">
        S
      </div>
    </header>
  );
};

export default Header;
