import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdFeedback } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ManageClasses = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Elite Sports | Manage Classes </title>
      </Helmet>
      <SectionTitle heading={"Manage Classes"}></SectionTitle>

      <div className="overflow-x-auto md:w-full">
        <table className="table text-center ">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image & Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Actions</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>John doe</td>
              <td>john@email.com</td>
              <td>$ 50</td>
              <td> 50</td>
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
              <td>
                {" "}
                <button className="btn btn-sm bg-slate-700">Approved</button>
              </td>
              <td>
                {" "}
                <button className="btn btn-sm bg-slate-700">Deny</button>
              </td>
              <td>
                <button className="btn  text-white">
                  <MdFeedback></MdFeedback>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
