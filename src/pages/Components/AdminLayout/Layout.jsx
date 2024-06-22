import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="flex w-full">
        <div className="w-96">
          <Sidebar />
        </div>
        <div className="w-full">{props.children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
