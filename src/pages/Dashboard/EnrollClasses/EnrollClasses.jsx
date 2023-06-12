import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrash, FaAmazonPay } from "react-icons/fa";

const EnrollClasses = () => {
  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Elite Sports | My Classes </title>
      </Helmet>
      <SectionTitle heading={"My Enrolled Class"}></SectionTitle>
      <div className="overflow-x-auto w-full bg-slate-800 md:ml-4 ">
        <table className="table table-zebra w-full ">
          {/* head */}
          <thead className="text-center">
            <tr className="bg-gray-700 text-lime-300">
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>johndeo@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollClasses;
