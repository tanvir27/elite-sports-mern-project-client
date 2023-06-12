import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { MdAssignment, MdPayment, MdHistory } from "react-icons/md";
const Dashboard = () => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  items-center">
          {/* Page content here */}

          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-outline my-4 border-0 border-b-2 bg-slate-900 drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-slate-800 py-10">
            {/* Sidebar content here */}
            <li className="">
              <NavLink to="/dashboard/selectedclass">
                <AiOutlineFundProjectionScreen />
                My Selected Class
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/enrollclass">
                {" "}
                <MdAssignment />
                My Enroll Class
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment">
                {" "}
                <MdPayment /> Payment
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
                {" "}
                <MdHistory /> Payment History
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
