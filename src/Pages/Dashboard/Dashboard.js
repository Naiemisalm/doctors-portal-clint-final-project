import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content">
        <h1 className='text-3xl text-purple-500 font-bold'> Welcome to your Dashboard </h1>
        <Outlet></Outlet>
          <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Appointment</Link></li>
            <li><Link to='/dashboard/reviwe'>My Reviwes</Link></li>
            <li><Link to='/dashboard/myhistory'>My History</Link></li>
            <li><Link to='/dashboard/users'>All Users</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;