import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const ManageUsers = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Elite Sports | Manage Users </title>
      </Helmet>
      <SectionTitle heading={"Manage Users"}></SectionTitle>

      <div className="overflow-x-auto w-full bg-slate-800 md:ml-4">
        <table className="table table-zebra w-full ">
          {/* head */}
          <thead className="text-center">
            <tr className="bg-gray-700 text-lime-300">
              <th>#</th>
              <th> Name</th>
              <th>Email</th>
              <th>Actions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn btn-sm bg-slate-700">Admin</button>
              </td>
              <td>
                <button className="btn btn-sm bg-slate-700">Instructor</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
