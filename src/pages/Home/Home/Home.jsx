import React from "react";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors";

import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Home | Elite Sports</title>
      </Helmet>

      <Banner></Banner>

      <PopularClasses />
      <PopularInstructors />
      <Reviews />
    </div>
  );
};

export default Home;
