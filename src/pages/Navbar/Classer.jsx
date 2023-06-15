import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import useAdmin from "../../hooks/useAdmin";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import useInstructor from "../../hooks/useInstructor";

const Classer = () => {
  const { user } = useContext(AuthContext);
  const [disable, setDisable] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [classes] = useClasses();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [axiosSecure] = useAxiosSecure();
  const handleBookClass = (classData) => {
    if (user) {
      const {
        _id,
        image,
        name,
        available_seats,
        price,
        instructor_name,
        instructor_email,
        enroll_students,
      } = classData;
      const bookedClass = {
        image,
        name,
        available_seats,
        price,
        instructor_name,
        instructor_email,
        enroll_students,
        user_email: user?.email,
        class_id: _id,
      };
      const productId = _id;
      const userEmail = user?.email;
      console.log(bookedClass);

      axiosSecure.post("/bookedclass", { bookedClass }).then((res) => {
        if (res.data.insertedId) {
          localStorage.setItem(
            `cartButtonDisabled_${productId}_${userEmail}`,
            "true"
          );
          Swal.fire({
            title: "Success!",
            text: "Successfully Booked a Class !!",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    } else {
      const state = { from: location };
      navigate("/login", { state, replace: true });
    }
  };

  return (
    <div className="px-24 mt-12 mb-12">
      <Helmet>
        <title> Classes | Elite Sports</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {classes.map((data) => (
          <div
            key={data._id}
            className={`card flex-shrink-0 w-full  border ${
              data?.available_seats == 0 ? "bg-red-600" : ""
            } shadow-2xl  bg-base-200 text-black`}
          >
            <figure>
              <img
                className="h-[300px] object-cover object-center"
                src={data?.image}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold  justify-center">
                {data?.name}
              </h2>
              <p className="font-bold">
                Instructor name: {data?.instructor_name}{" "}
              </p>
              <p className="font-bold ">
                Available seats: {data?.available_seats}{" "}
              </p>
              <p className="font-bold ">
                Enrolled Students : {data.enroll_students}
              </p>
              <p className="font-bold ">Price : ${data.price} </p>

              {/* <p className=""><StarIcon className="h-6 w-6 text-yellow-500 inline me-2" /></p> */}
              <div className="w-full text-center">
                <Link>
                  <button
                    onClick={() => handleBookClass(data)}
                    disabled={
                      data?.available_seats == 0 ||
                      isAdmin ||
                      isInstructor ||
                      localStorage.getItem(
                        `cartButtonDisabled_${data._id}_${user?.email}`
                      ) === "true"
                    }
                    className="btn btn-outline font-serif border-0 border-b-2 bg-slate-900 tracking-[3px] text-emerald-100"
                  >
                    Book
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classer;
