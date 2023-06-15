import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const { createUser, profileUpdate, logOut } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    // create user
    createUser(data.email, data.password)
      .then((result) => {
        // update user name and photoURl
        profileUpdate(data.name, data.photoURL)
          .then(() => {
            const savedUser = {
              name: data.name,
              email: data.email,
              image: data.photoURL,
            };
            fetch("https://server-site-green.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Register",
                    showConfirmButton: false,
                    timer: 1000,
                  });
                  logOut()
                    .then(() => {
                      navigate("/login");
                    })
                    .catch((error) => {
                      console.log(error.message);
                    });
                }
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleShowPassword = () => {
    setVisible(!visible);
  };
  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>Sign Up | Sign Up</title>
      </Helmet>
      <div className="hero-content w-full">
        <div className="hero-content gap-24 flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left hidden md:block">
            <img
              src="https://i.ibb.co/56xsWjr/5568706-5568706-removebg-preview.png"
              alt=""
            />
          </div>

          <div className="card flex-shrink-0 w-full text-white max-w-sm shadow-2xl bg-slate-800">
            <div className="card-body">
              <h1 className="text-3xl font-bold">Register now!</h1>
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label ">
                    <span className="text-white label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="enter your name"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Name is required
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Email is required
                    </p>
                  )}
                </div>
                <div className="form-control text-black">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Password is required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600" role="alert">
                      Password should be 6 character long!
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600 text-start text-sm" role="alert">
                      Password must be less than 20 character long
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600 text-start text-sm" role="alert">
                      Password must have one lower case, one uppercase, one
                      number and one special character
                    </p>
                  )}
                </div>

                <div className="form-control text-black">
                  <label className="label">
                    <span className="label-text text-white">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type={visible ? "text" : "password"}
                    name=""
                    placeholder="Confirm password"
                    className="input input-bordered"
                    {...register("cpassword", {
                      validate: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                      },
                    })}
                  />
                  {errors.cpassword && (
                    <p className="text-red-600" role="alert">
                      {errors.cpassword.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label
                    onClick={handleShowPassword}
                    className="cursor-pointer label"
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text text-white">Show Password</span>
                  </label>
                </div>
                <div className="form-control text-black">
                  <label className="label">
                    <span className="label-text text-white">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="Your profile photo url"
                    className="input input-bordered"
                    {...register("photoURL", { required: true })}
                  />
                  {errors.photoURL?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Photo URL is required
                    </p>
                  )}
                </div>
                <div className="form-control mt-6 ">
                  <button className="btn btn-outline bg-slate-800 text-white hover:bg-gray-700">
                    Register
                  </button>
                </div>
                <p className="text-red-400">{error} </p>
                <p className="font-bold mt-3 p-3 text-center">
                  Already member?{" "}
                  <Link to={"/login"}>
                    <span className="text-teal-400  underline">Sign In</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
