import HomeListComposer from "./home-list-instrument";

import ethicalImg from "../img/ethical_hack.jpg";
import cdataImg from "../img/cdata.jpg";
import kuberImg from "../img/kubernetes.jpg";
import financialImg from "../img/financial.jpg";
import graphicImg from "../img/graphic.jpg";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
const mystyle = {
  color: "#3c3b37",
  fontSize: "1.6rem",
  marginTop: "3rem",
  marginLeft: "16.4%"
};
const HomeInstrument = () => {
  const courses = [
    {
      instrument: "flute",
      images:"../../src/img/kubernetes.jpg"
    },
    {
      instrument: "clarinet",
      images:"../../src/img/kubernetes.jpg"
    },
    {
      instrument:"Trumpet",
      images:"../../src/img/kubernetes.jpg"
    },
    {
      instrument: "Violin",
      images:"../../src/img/cdata.jpg"
    },
    {
      instrument: "Cello",
      images:"../../src/img/cdata.jpg"
    },
  ];

  const courses2 = [
    {
      instrument:"Piano",
      images:"../../src/img/cdata.jpg"
    },
    {
      instrument: "Viola",
      images:"../../src/img/kubernetes.jpg"
    },
    {
      instrument: "Oboe",
      images:"../../src/img/kubernetes.jpg"
    },
    {
      instrument: "Bassoon",
      images:"../../src/img/kubernetes.jpg"
    },
    {
      instrument: "Horn",
      images:"../../src/img/kubernetes.jpg"
    },
  ];
  return (
  <>

    <h4 style={mystyle}>View by Instruments</h4>
    <Swiper

        slidesPerView={1}
        spaceBetween={33}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
      <SwiperSlide><HomeListComposer courses={courses}/></SwiperSlide>
      <SwiperSlide><HomeListComposer courses={courses2}/></SwiperSlide>
    </Swiper>
  </>
  );
};

export default HomeInstrument;
