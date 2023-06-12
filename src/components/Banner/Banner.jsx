import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="lg:flex lg:items-center  ">
      <div className="">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to <span className="text-amber-500">Elite Sports</span>
        </h1>

        <h3></h3>
        <p className="text-xl text-justify lg:px-10">
          Unlock your potential with our top-notch sports programs. Join us to
          learn from experienced instructors, build your skills in your favorite
          sports activities. Limited seats available - enroll today!
        </p>
        <div className="text-center mb-6">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-900 text-white">
            Enroll Now
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 lg:pt-10 lg:pb-16 rounded">
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
          className="w-full"
        >
          <SwiperSlide>
            <img
              className="rounded"
              src="https://i.ibb.co/HYBYLcH/side-view-boy-training-gym.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded"
              src="https://i.ibb.co/SBcqKnn/man-playing-padel.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="rounded"
              src="https://i.ibb.co/Vj0szZ8/two-judokas-fighters-fighting-men.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded"
              src="https://i.ibb.co/10Ytxds/football-trainer-teaching-his-pupils-1.jpg"
              alt=""
            />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
