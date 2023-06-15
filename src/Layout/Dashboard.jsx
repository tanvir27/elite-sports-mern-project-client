import { FaHome } from "react-icons/fa";
import { GiConfirmed, GiTeacher, GiWallet } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { NavLink, Link, Outlet } from "react-router-dom";
import { BsDatabaseFillAdd } from "react-icons/bs";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 text-lg w-80 h-full font-semibold bg-base-200 text-base-content">
          <NavLink className=" normal-case text-3xl font-bold font-serif mb-5 " to="/">
            Elite<span className="text-red-600">Sports</span>
          </NavLink>
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageclasses">
                  <SiGoogleclassroom /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageuser">
                  <MdManageAccounts /> Manage User
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addclass">
                  <BsDatabaseFillAdd /> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclasses">
                  <SiGoogleclassroom /> My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/bookedclasses">
                  <SiGoogleclassroom /> My Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrollclass">
                  <GiConfirmed /> My Enrolled Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <GiWallet /> Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <Link to="/">
              {" "}
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/instructors">
              <GiTeacher /> Instructors
            </Link>
          </li>
          <li>
            <Link to="/classes">
              <SiGoogleclassroom /> Classes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
