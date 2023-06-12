import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Elite Sports | Payment History</title>
      </Helmet>
      <SectionTitle heading={"Payment History"}></SectionTitle>

      <div className="overflow-x-auto w-full bg-slate-800 md:ml-4">
        <table className="table table-zebra w-full ">
          {/* head */}
          <thead className="text-center">
            <tr className="bg-gray-700 text-lime-300">
              <th>#</th>
              <th>Email</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>cy@gmail.com</td>
              <td>Quality Control </td>
              <td className="">$ 50</td>
              <td className="">Monday, April 10,2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
