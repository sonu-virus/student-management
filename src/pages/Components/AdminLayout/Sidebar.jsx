import React from 'react';
import { Link } from 'react-router-dom';
import { MdBatchPrediction } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import { deleteCookie, getCookie } from '../../../utils/manageCookie';
import Button from './Ui/Button';

const Sidebar = () => {
  const refreshToken = getCookie('refreshToken');

  const logOut = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        'https://api.iot.inflection.org.in/users/logout',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      deleteCookie('refreshToken');
      deleteCookie('accessToken');
    } catch (error) {
      console.log(error);
    }
  };

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
    {
      label: 'Device',
      path: '/device',
      icon: <MdBatchPrediction />,
    },
  ];

  return (
    <div className="fixed   top-16 left-0 bottom-0border-r shadow-sm">
      <div className="relative w-72 bg-blue-950 overflow-y-auto h-screen ">
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
        <div className="absolute  bottom-20 right-2 text-white">
          <Button onClick={logOut}>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
