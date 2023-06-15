import React from "react";
import useClasses from "../../../hooks/useClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes/allclasses");
      return res.data;
    },
  });
  const handleStatus = (id, status) => {
    axiosSecure.patch(`/classes/${id}`, { status }).then((res) => {
      if (status === "Approved" && res.data.modifiedCount) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Approved By Admin!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (status === "Denied" && res.data.modifiedCount) {
        refetch();
        Swal.fire({
          icon: "error",
          title: "Denied By Admin!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="w-full mx-5 my-10">
      <Helmet>
        <title> Manage Classes | Elite Sports</title>
      </Helmet>
      <div className="overflow-x-auto mx-10 bg-slate-200 text-black py-10 rounded-lg shadow-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-black text-white">
              <th className="text-center"></th>
              <th className="text-center">Image</th>
              <th className="text-center">Name</th>
              <th className="text-center">Instructor Info</th>
              <th className="text-center">Available Seats</th>
              <th className="text-center">Price</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((data, index) => (
              <tr className=" border-slate-400" key={data._id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={data.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center font-semibold">{data.name}</td>
                <td className="text-center">
                  <div>
                    <div className="font-bold">{data.instructor_name}</div>
                    <div className="text-sm opacity-50">
                      {data.instructor_email}
                    </div>
                  </div>
                </td>
                <td className="text-center">{data.available_seats}</td>
                <td className="text-center">${data.price}</td>
                <td className="text-center">{data.status}</td>
                <td className="text-center flex justify-center mt-3 space-x-2">
                  <button
                    onClick={() => handleStatus(data._id, "Approved")}
                    disabled={
                      data?.status == "Approved" || data?.status == "Denied"
                    }
                    className="btn btn-primary bg-slate-600  btn-xs"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatus(data._id, "Denied")}
                    disabled={
                      data?.status == "Approved" || data?.status == "Denied"
                    }
                    className="btn btn-warning   btn-xs"
                  >
                    Deny
                  </button>
                  <Link
                    to={`/dashboard/feedback/${data._id}`}
                    disabled={
                      data?.status == "Approved" ||
                      data?.status == "Pending" ||
                      data?.feedback?.length > 0
                    }
                    className="btn  btn-primary  btn-xs"
                  >
                    Feedback
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
