import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";

const MyClass = () => {
  return (
    <div className="md:w-full">
      <Helmet>
        <title>Elite Sports | My Classes </title>
      </Helmet>
      <SectionTitle heading={"My CLASSes"}></SectionTitle>

      <div className="overflow-x-auto md:w-full bg-slate-800 md:ml-4 ">
        <table className="overflow-x-auto table table-zebra md:w-full ">
          {/* head */}
          <thead className="">
            <tr className="bg-gray-700 text-lime-300">
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Actions</th>
              <th>Total Enroll </th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>$ 50</td>
              <td className="">
                <button className="btn btn-sm block bg-slate-700 text-white">
                  Pending
                </button>
                <button className="btn btn-sm block bg-orange-900 text-white">
                  Approved
                </button>
                <button className="btn btn-sm block bg-zinc-700 text-white">
                  Denied
                </button>
              </td>
              <td>$ 50</td>

              <td>
                <div className="btn  text-white">
                  <MdFeedback></MdFeedback>
                </div>
              </td>
              <td>
                <div className="btn text-white">
                  <FaEdit></FaEdit>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
