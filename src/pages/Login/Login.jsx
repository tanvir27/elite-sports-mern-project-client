import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";

const Login = () => {
  const [error, setError] = useState('');
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleGoogleLogin = (event) => {
  //   event.preventDefault();
  //   googleLogin()
  //     .then(() => {
  //       navigate(from, { replace: true });
  //       toast.success("Log in Successful");
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Helmet>
        <title>Elite Sports | Login</title>
      </Helmet>
     
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col gap-24 md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left hidden md:block">
            <img
              src="https://i.ibb.co/56xsWjr/5568706-5568706-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your Email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Type password "
                  className="input input-bordered pr-12"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer focus:outline-none"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <FiEyeOff className="text-gray-400" />
                  ) : (
                    <FiEye className="text-gray-400" />
                  )}
                </button>
              </div>
              <div>{error && <p className="text-red-600">{error}</p>}</div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
                New Here? Create Your account{" "}
                <Link to="/signup">
                  <span className="text-white underline">SignUp</span>
                </Link>{" "}
              </small>
            </p>

            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
