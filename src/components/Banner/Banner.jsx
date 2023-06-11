import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from '../../assets/football-trainer-teaching-his-pupils.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import "./banner.css";

const Banner = () => {
 const progressCircle = useRef(null);
 const progressContent = useRef(null);
 const onAutoplayTimeLeft = (s, time, progress) => {
   progressCircle.current.style.setProperty("--progress", 1 - progress);
   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
 };
  return (
    <div className="">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative ">
              <img className="rounded " src={image} alt="" />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
                <h2 className=" text-3xl font-bold mb-4">
                  "Limited Seats Available - Enroll Today!"
                </h2>
                <p className=" text-lg">
                  {" "}
                  Don't miss out on this opportunity to develop your skills,
                  forge lasting friendships, and experience the thrill of
                  sports.
                </p>
                <p>
                  Enroll today and take the first step towards reaching your
                  full athletic potential!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ">
              <img className="rounded " src={image} alt="" />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
                <h2 className=" text-3xl font-bold mb-4">
                  "Limited Seats Available - Enroll Today!"
                </h2>
                <p className=" text-lg">
                  {" "}
                  Don't miss out on this opportunity to develop your skills,
                  forge lasting friendships, and experience the thrill of
                  sports.
                </p>
                <p>
                  Enroll today and take the first step towards reaching your
                  full athletic potential!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ">
              <img className="rounded " src={image} alt="" />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
                <h2 className=" text-3xl font-bold mb-4">
                  "Limited Seats Available - Enroll Today!"
                </h2>
                <p className=" text-lg">
                  {" "}
                  Don't miss out on this opportunity to develop your skills,
                  forge lasting friendships, and experience the thrill of
                  sports.
                </p>
                <p>
                  Enroll today and take the first step towards reaching your
                  full athletic potential!
                </p>
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
