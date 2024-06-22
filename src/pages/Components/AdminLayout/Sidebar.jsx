import React from 'react';
import { Link } from 'react-router-dom';
import { MdBatchPrediction } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';

const Sidebar = () => {
  const allLinks = [
    {
      label: 'Attendance',
      path: '/attendance',
      icon: <PiStudent />,
    },
    {
      label: 'Students',
      path: '/students',
      icon: <PiStudent />,
    },
    {
      label: 'Batch',
      path: '/batches',
      icon: <MdBatchPrediction />,
    },
  ];

  return (
    <div className="fixed w-72 top-16 left-0 bottom-0 bg-blue-950 overflow-y-auto h-screen border-r shadow-sm">
      <ul className="flex text-white flex-col">
        {allLinks.map((link, i) => (
          <li
            key={i}
            className="flex  hover:bg-gray-300 hover:text-black items-center gap-1 p-2 border-b"
          >
            <span>{link.icon}</span>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
