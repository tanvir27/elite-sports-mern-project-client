import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SectionTitle from "../../../hooks/SectionTitle";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [], refetch } = useQuery({
    queryKey: ["myClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/myclasses/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="w-11/12 m:w-10/12 mx-auto my-20">
      <Helmet>
        <title> My Classes | Elite Sports </title>
      </Helmet>
      <SectionTitle heading={"My Classes"}></SectionTitle>

      <div className="overflow-x-auto bg-slate-700 p-5 mb-10 rounded-lg shadow-xl">
        <table className="table table-md table-pin-rows table-pin-cols ">
          <thead>
            <tr className="bg-black text-white">
              <td></td>
              <td>Class Name</td>
              <td>Enrolled Students</td>
              <td>Status</td>
              <td>Feedback</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data?.enrolled_students ? data.enrolled_students : 0}</td>
                <td>{data.status}</td>
                <td>
                  {data.status == "pending" || data.status == "approved"
                    ? "N/A"
                    : data.feedback}
                </td>
                <td>
                  <Link
                    to={`/dashboard/update/classes/${data._id}`}
                    className="btn btn-xs btn-warning"
                  >
                    Update
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

export default MyClasses;
