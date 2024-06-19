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
    <div className="sticky top-0 left-0 bottom-0 overflow-y-auto h-screen border-r shadow-sm">
      <ul className="flex flex-col gap-1 mt-16">
        {allLinks.map((link, i) => (
          <li key={i} className="flex items-center gap-1 p-2 border-t">
            <span>{link.icon}</span>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
