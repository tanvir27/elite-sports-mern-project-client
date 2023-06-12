import { useContext, useEffect, useRef } from "react";
// import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import tippy from "tippy.js";
import { FiSun, FiMoon } from "react-icons/fi";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  //   const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfully !");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (user) {
      tippy(buttonRef.current, {
        content: user.displayName,
      });
    }
  }, [user]);

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      {user ? (
        <div className="flex gap-3 ">
          <span>
            {" "}
            <li onClick={handleLogOut}>
              <Link to="/login"> LogOut</Link>
            </li>
          </span>
          <span className="">
            <img
              className="rounded-full"
              src={user?.photoURL}
              alt="Image not found"
              ref={buttonRef}
              style={{ height: "38px", width: "40px" }}
            />
          </span>
        </div>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-opacity-30 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <h1 className="font-semibold text-zinc-200 text-3xl ">
            {" "}
            <Link to="/">EliteSports </Link>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end ">
          <button className="btn bg-slate-800 btn-circle hover:bg-slate-700 text-white">
            <FiSun></FiSun>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
