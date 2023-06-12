import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Payment = () => {


  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };
  return (
    <div className="w-full text-center md:pt-24">
      <Helmet>
        <title>Elite Sports | Payment</title>
      </Helmet>
      <SectionTitle heading={"Payment"}></SectionTitle>

   
    </div>
  );
};

export default Payment;
