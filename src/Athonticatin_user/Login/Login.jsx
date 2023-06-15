import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FiEye, FiEyeOff } from "react-icons/fi";
const Login = () => {
  const { logIn, googleLogIn } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    logIn(data.email, data.password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const loggedUser = result.user;
        const user = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,
        };
        fetch("https://server-site-green.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              console.log("success");
            }
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // const handleShowPassword = () => {
  //   setVisible(!visible);
  // };
  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>Login | Elite Sports</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <div className="hero-content w-full flex-col gap-24 md:flex-row-reverse">
          <div className="text-center md:w-full lg:text-left hidden md:block">
            <img
              src="https://i.ibb.co/56xsWjr/5568706-5568706-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-white bg-slate-800">
            <div className="card-body">
              <h1 className="text-3xl font-bold">Login now!</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mb-2 text-black">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />

                  {errors.email?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Email is required
                    </p>
                  )}
                </div>
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <div className="form-control relative text-black">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Type password "
                    {...register("password", { required: true })}
                    className="input input-bordered pr-12"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer focus:outline-none"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <FiEyeOff className="text-black" />
                    ) : (
                      <FiEye className="text-black" />
                    )}
                  </button>
                </div>
                <div>{error && <p className="text-red-600">{error}</p>}</div>

                <div className="form-control mt-6 ">
                  <button className="btn bg-teal-800 text-white border-0 hover:border hover:bg-teal-900">
                    Login
                  </button>
                </div>
              </form>
              <p className="text-red-400 p-2">{error}</p>
              <div className="divider"></div>
              <div className="form-control ">
                <button
                  className="btn btn-outline bg-slate-800 text-white hover:bg-gray-700"
                  onClick={handleGoogleLogIn}
                >
                  {" "}
                  <img
                    src="https://i.ibb.co/FK4xtWJ/google-icon.png"
                    className="h-full p-2"
                  />{" "}
                  Login with Google
                </button>
              </div>
              <p className="font-bold text-center mt-3 p-3">
                Don't have an acccount?{" "}
                <Link to={"/register"}>
                  <span className="text-orange-500  underline">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
