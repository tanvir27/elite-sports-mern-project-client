import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const SocialLogIn = () => {
  const {  googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

 const handleGoogleLogin = (event) => {
   event.preventDefault();
   googleLogin()
     .then(() => {
       navigate(from, { replace: true });
       toast.success("Log in Successful");
     })
     .catch((error) => {
       setError(error.message);
     });
 };
  return (
    <div className="">
      <div className="divider"></div>
      <div className="text-center w-full my-4">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline text-white "
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SocialLogIn;
