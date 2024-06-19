import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = (props) => {
  return (
    <div className="flex gap-3 w-full">
      <div className="w-96">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
