import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-[120px] ml-10">
          {/* Page content here */}
          <h2 className='text-5xl text-indigo-500'>Dashboard</h2>
          <Outlet></Outlet>
         
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-[120px]">
            {/* Sidebar content here */}
            <li><Link to='/dashboard' className='text-black'>My Appointment</Link></li>
            <li><Link to='/dashboard/review'>My Review</Link></li>
            <li><Link to='/dashboard/users'>All Users</Link></li>
           
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;