import React from "react";
import { Link, Outlet } from "react-router-dom";

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from "../../useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="deshboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
          <h2 className="text-3xl text-purple-500">Welcome to your Dashboard</h2>
        <Outlet></Outlet>

      </div>
      <div class="drawer-side">
        <label htmlFor="deshboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>My Appointments</Link>
          </li>
          <li>
            <Link to='/dashboard/review'>Reviews</Link>
          </li>
          <li>
            <Link to='/dashboard/history'>History</Link>
          </li>
          <li>
            {
              admin && <>
              <Link to='/dashboard/users'>Users</Link>
              <Link to='/dashboard/addDoctor'>Add a Doctor</Link>
              <Link to='/dashboard/manageDoctor'>Manage Doctor</Link>
              </>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
